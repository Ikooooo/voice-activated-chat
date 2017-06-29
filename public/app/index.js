const commands = {
    indexes: ["stop"],
    action() {
        artyom.dontObey();
    }
};

artyom.addCommands(commands);

function startListening() {
    artyom.fatality();

    setTimeout(() => {
        artyom.initialize({
            lang: "en-GB",
            continuous: true,
            obeyKeyword: "okay",
            listen: true,
            debug: false,
            speed: 1
        }).then(() => {
            artyom.dontObey();
            artyom.redirectRecognizedTextOutput((recognized, isFinal) => {
                if (isFinal) {
                    if (!(recognized.toLowerCase().trim() == "okay" || recognized.toLowerCase().trim() == "stop")) {
                        recognized = recognized.trim().toLowerCase();
                        vm.recognized = recognized;
                        if (recognized.startsWith("play")) {
                            vm.process(recognized, "media");
                        } else if (recognized.startsWith("wikipedia")) {
                            vm.process(recognized, "search");
                        } else {
                            vm.process(recognized, "basic");
                        }
                    }
                } else {
                    vm.recognized = recognized;
                }
            });
        });

    }, 250);
}

function say(text, type) {
    artyom.say(text, {
        onStart() {
            vm.messages.push({
                owner: false,
                text,
                type,
                time: Date.now()
            })
            artyom.fatality();
        },
        onEnd() {
            startListening();
        }
    });
}

var vm = new Vue({
    el: "#app",
    delimiters: ["[[", "]]"],
    data: {
        messages: [],
        recognized: null,
        self: 'self',
        other: 'other',
        wikipediaStyle: 'other-wikipedia',
        weatherAPIKey: "",
        youtubeAPIKey: ""
    },
    created() {
        startListening();
    },
    methods: {
        normalize(text) {
            // normalize before classifying!
            return nlp(text).normalize().out('text');
        },
        process(text, type) {
            const data = {
                time: Date.now(),
                text,
                type: "basic",
                owner: true
            };
            this.messages.push(data);
            if (type == "basic") {
                axios.post('/process', {
                    recognized: this.normalize(text)
                }).then(response => {
                    console.log(response.data)
                    const action = response.data.action;
                    const subject = response.data.subject;
                    const owner = response.data.owner;
                    if (action == "what") {
                        if (nlp(subject).has('time')) {
                            say(`It is ${moment().format('h:mm a')}.`, type);
                        } else if (nlp(subject).has('weather')) {
                            axios.get(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${owner}&apiKey=${this.weatherAPIKey}`).then(response => {
                                say(`It is currently ${Math.round(response.data.main.temp)}° in ${owner}.`, type);
                            }).catch(error => {
                                console.log(error);
                            })
                        } else if (nlp(subject).has('meaning')) {
                            console.log(owner)
                        }
                    }
                })
            } else if (type == "media") {
                const title = text.substr(text.indexOf(" ") + 1);
                axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${this.youtubeAPIKey}&q=${title}`).then(response => {
                    const youtubeId = response.data.items[0].id.videoId;
                    vm.messages.push({
                        owner: false,
                        url: `https://www.youtube.com/embed/${youtubeId}?autoplay=1`,
                        type,
                        time: Date.now()
                    })
                }).catch(error => {
                    console.log(error);
                })
            } else if(type == "search") {
                const title = text.substr(text.indexOf(" ") + 1);
                axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${title}&format=json`).then(response => {
                    say(response.data[2][0], type);
                }).catch(error => {
                    console.log(error);
                })
            }

        },
        formatTimestamp(timestamp) {
            return moment(timestamp).format('MM/DD/YYYY, h:mm:ss a');
        }
    }
})
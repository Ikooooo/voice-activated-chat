var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// basic analyzer
var speak = require("speakeasy-nlp");

var app = express();

var PORT = 4567;

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index')
});

app.post('/process', function(req, res) {
    var data = speak.classify(req.body.recognized);
    res.json(data);
})

app.listen(PORT, function() {
    console.log(`Server Started on Port ${PORT}....`);
})
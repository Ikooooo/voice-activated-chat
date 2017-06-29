import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'html': {
    'background': '#252C33',
    'fontFamily': ''Lato', sans-serif',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'body': {
    'background': '#252C33',
    'fontFamily': ''Lato', sans-serif',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  '::selection': {
    'background': 'rgba(82, 179, 217, 0.3)',
    'color': 'inherit'
  },
  // M E N U
  'menu': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'background': 'rgba(27, 35, 42, 0.9)',
    'zIndex': '100',
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none'
  },
  'back': {
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 90 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'color': 'rgba(255, 255, 255, 0.5)',
    'lineHeight': [{ 'unit': 'px', 'value': 45 }],
    'fontSize': [{ 'unit': 'px', 'value': 40 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }],
    'cursor': 'pointer',
    'transition': '.15s all'
  },
  'back img': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 5 }],
    'left': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'backgroundColor': 'rgba(255, 255, 255, 0.1)',
    'borderRadius': '100%',
    'WebkitBorderRadius': '100%',
    'MozBorderRadius': '100%',
    'MsBorderRadius': '100%',
    'marginLeft': [{ 'unit': 'px', 'value': 15 }]
  },
  'back:active': {
    'background': 'rgba(0, 0, 0, 0.15)'
  },
  'title': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 3 }],
    'left': [{ 'unit': 'px', 'value': 110 }],
    'fontFamily': ''Lato'',
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'fontWeight': '300',
    'color': 'rgba(255, 255, 255, 0.98)',
    'cursor': 'default'
  },
  'last': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 30 }],
    'left': [{ 'unit': 'px', 'value': 115 }],
    'fontFamily': ''Lato'',
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'fontWeight': '400',
    'color': 'rgba(255, 255, 255, 0.6)',
    'cursor': 'default'
  },
  'subtitle': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 30 }],
    'left': [{ 'unit': 'px', 'value': 115 }],
    'fontFamily': ''Lato'',
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'fontWeight': '400',
    'color': 'rgba(255, 255, 255, 0.6)',
    'cursor': 'default',
    'wordSpacing': '2px'
  },
  // M E S S A G E S
  'chat': {
    'listStyle': 'none',
    'background': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 60 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'chat li': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }],
    'overflow': 'hidden',
    'display': 'flex'
  },
  'chat day': {
    'position': 'relative',
    'display': 'block',
    'textAlign': 'center',
    'color': 'rgba(255, 255, 255, 0.3)',
    'height': [{ 'unit': 'px', 'value': 20 }],
    'textShadow': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'px', 'value': -2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'px', 'value': -3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'px', 'value': -4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'px', 'value': -5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'px', 'value': -6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'px', 'value': -7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': -20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#252C33,' }, { 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(255, 255, 255, 0.1)' }],
    'lineHeight': [{ 'unit': 'px', 'value': 38 }],
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'cursor': 'default',
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none'
  },
  'chat notification': {
    'position': 'relative',
    'display': 'inherit',
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'color': 'rgba(255, 255, 255, 0.15)',
    'background': 'rgba(234, 247, 255, 0.035)',
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'borderRadius': '100px',
    'margin': [{ 'unit': 'px', 'value': 7 }, { 'unit': '%H', 'value': 0.35 }, { 'unit': 'px', 'value': 7 }, { 'unit': '%H', 'value': 0.35 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .05)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .05),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .05)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .05),' }, { 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(255, 255, 255, .02)' }, { 'unit': 'string', 'value': 'rgba(255, 255, 255, .02),' }, { 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(255, 255, 255, .02)' }],
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .1)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .1),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(255, 255, 255, .05)' }],
    'cursor': 'default',
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'transition': 'all .2s cubic-bezier(0.565, -0.260, 0.255, 1.410)'
  },
  'chat notification time': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 7 }],
    'right': [{ 'unit': 'px', 'value': 7 }],
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'borderRadius': '100px',
    'background': '#252C33',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(255, 255, 255, .02)' }, { 'unit': 'string', 'value': 'rgba(255, 255, 255, .02),' }, { 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(27, 35, 42, 0.1)' }],
    'height': [{ 'unit': 'px', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'color': 'rgba(255, 255, 255, 0.1)',
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'transition': 'all .2s cubic-bezier(0.565, -0.260, 0.255, 1.410)'
  },
  'other-wikipedia': {
    'width': [{ 'unit': 'px', 'value': 350 }],
    'whiteSpace': 'pre',
    // CSS2
    'whiteSpace': '-moz-pre-wrap',
    // Mozilla
    'whiteSpace': '-hp-pre-wrap',
    // HP printers
    'whiteSpace': '-o-pre-wrap',
    // Opera 7
    'whiteSpace': '-pre-wrap',
    // Opera 4-6
    'whiteSpace': 'pre-wrap',
    // CSS 2.1
    'whiteSpace': 'pre-line',
    // CSS 3 (and 2.1 as well, actually)
    'wordWrap': 'break-word',
    // IE
    'textAlign': 'justify'
  },
  'other msg': {
    'borderTopLeftRadius': '0px',
    'boxShadow': [{ 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#c1cbcd' }]
  },
  'self': {
    'justifyContent': 'flex-end',
    'alignItems': 'flex-end'
  },
  'self msg': {
    'borderBottomRightRadius': '0px',
    'boxShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#c1cbcd' }]
  },
  'self:after': {
    'content': '""',
    'position': 'relative',
    'display': 'inline-block',
    'float': 'right',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eef8ff' }],
    'borderRightColor': 'transparent',
    'borderTopColor': 'transparent',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#c1cbcd' }]
  },
  'msg': {
    'background': '#eef8ff',
    'minWidth': [{ 'unit': 'px', 'value': 50 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '2px',
    'wordBreak': 'break-all'
  },
  'msg user': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }],
    'color': '#666',
    'fontWeight': '700',
    'marginTop': [{ 'unit': 'px', 'value': -2 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'transition': 'all .2s ease',
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none'
  },
  'msg user rangeadmin': {
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'fontWeight': '300',
    'color': '#6aea96',
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }],
    'borderRadius': '3px',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#6aea96' }],
    'background': 'rgba(255, 255, 255, 0)',
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'msg p': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }],
    'color': '#777',
    'transition': 'all .2s ease',
    'screen&&<w550': {
      'maxWidth': [{ 'unit': 'px', 'value': 250 }]
    }
  },
  'msg img': {
    'position': 'relative',
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 600 }],
    'borderRadius': '5px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': '#eee' }],
    'transition': 'all .8s cubic-bezier(0.565, -0.260, 0.255, 1.410)',
    'cursor': 'default',
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none'
  },
  'msg time': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.7 }],
    'color': 'rgba(0, 0, 0, .35)',
    'marginTop': [{ 'unit': 'px', 'value': 3 }],
    'float': 'right',
    'cursor': 'default',
    'WebkitTouchCallout': 'none',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none'
  },
  '::-webkit-scrollbar': {
    'minWidth': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': 'px', 'value': 12 }],
    'maxWidth': [{ 'unit': 'px', 'value': 12 }],
    'minHeight': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'maxHeight': [{ 'unit': 'px', 'value': 12 }],
    'background': '#252C33',
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(27, 35, 42, 0.9)' }, { 'unit': 'string', 'value': 'rgba(27, 35, 42, 0.9),' }, { 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#eee' }],
    'screen&&<w750': {
      'display': 'none'
    }
  },
  '::-webkit-scrollbar-thumb': {
    'background': 'rgba(255, 255, 255, 0.2)',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderRadius': '100px',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': '#252C33' }]
  },
  '::-webkit-scrollbar-thumb:hover': {
    'background': 'rgba(255, 255, 255, 0.1)'
  },
  '::-webkit-scrollbar-thumb:active': {
    'background': 'rgba(255, 255, 255, 0.1)'
  },
  '::-webkit-scrollbar-button': {
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 26 }]
  },
  // T Y P E
  'typezone': {
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'zIndex': '99',
    'background': '#eee',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none'
  },
  'textarea': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.08 }],
    'right': [{ 'unit': '%H', 'value': 0.08 }],
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'zIndex': '100',
    'background': '#fafafa',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'paddingLeft': [{ 'unit': '%H', 'value': 0.02 }],
    'paddingRight': [{ 'unit': '%H', 'value': 0.02 }],
    'paddingTop': [{ 'unit': '%V', 'value': 0.02 }],
    'color': '#666',
    'fontWeight': '400',
    'borderTopRightRadius': '10px',
    'borderTopLeftRadius': '10px',
    'overflow': 'hidden',
    'resize': 'none',
    'zIndex': '200',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }],
    'transition': 'all .4s cubic-bezier(0.565, -0.260, 0.255, 1.410)'
  },
  'textarea:hover': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.08 }],
    'right': [{ 'unit': '%H', 'value': 0.08 }],
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'zIndex': '100',
    'background': '#fafafa',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'paddingLeft': [{ 'unit': '%H', 'value': 0.02 }],
    'paddingRight': [{ 'unit': '%H', 'value': 0.02 }],
    'paddingTop': [{ 'unit': '%V', 'value': 0.02 }],
    'color': '#666',
    'fontWeight': '400',
    'borderTopRightRadius': '10px',
    'borderTopLeftRadius': '10px',
    'overflow': 'hidden',
    'resize': 'none',
    'zIndex': '200',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }],
    'transition': 'all .4s cubic-bezier(0.565, -0.260, 0.255, 1.410)'
  },
  'textarea:focus': {
    'height': [{ 'unit': 'px', 'value': 300 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.3)' }]
  },
  'send': {
    'position': 'fixed',
    'display': 'block',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 0.08 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': 'none',
    'zIndex': '100',
    'cursor': 'pointer',
    'backgroundImage': 'url(https://i.imgur.com/VSQxJKL.png)',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': '34px 34px',
    'backgroundPosition': '45% 9px',
    'backgroundColor': 'rgba(255, 255, 255, 0)'
  },
  'send:active': {
    'opacity': '0.85'
  },
  // R E S P O N S I V E   C O N F I G U R A T I O N
});

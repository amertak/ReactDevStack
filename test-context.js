require('core-js/es5')
require('core-js/es6')

var context = require.context('./spec', true, /Spec\.js$/);
context.keys().forEach(context);

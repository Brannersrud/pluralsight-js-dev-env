//this file isnt transpiled so uses commonJS and es5

//register babel to transpile before our tests run
require('babel-register')();
//disable webpack features that mocha does not understand
require.extensions[".css"] = function () {};
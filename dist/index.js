(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}((function () { 'use strict';

	require('./src/color');

	module.exports = "what's your favorite flavor of ice cream, buddy? I LIKE THEM ALL";

})));

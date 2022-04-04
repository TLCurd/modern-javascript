/* global moment */
var moment = require('moment');
console.log("hola");
console.log(moment().format("[Today is] dddd"));
console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
// Interpolate variable bindings
var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);


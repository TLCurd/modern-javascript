/* global moment */
var moment = require('moment');
const math = require('mathjs');
console.log("hola");
console.log(moment().format("[Today is] dddd"));
console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
// Interpolate variable bindings
var name = "Yolanda", time = "right now";
console.log(`Hello ${name}, how are you ${time}?`);

console.log("what is happening right now");

console.log(44 * 3);

console.log(math.multiply(5,3, 3));

console.log('chained operations');
const a = math.chain(3)
  .add(4)
  .multiply(2)
  .done();
console.log(a); // 14
console.log();
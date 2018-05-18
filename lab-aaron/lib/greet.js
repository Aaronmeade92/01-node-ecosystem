'use strict'

var greet =  () => `hello ${name}, nice to meet you`;
var badGreet = () => {return null}
module.exports = [greet, badGreet];

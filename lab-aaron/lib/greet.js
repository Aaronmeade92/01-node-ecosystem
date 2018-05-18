'use strict';

function badGreet() {
  return null;
}
function greet() {
  return `Hi, ${name}`;
}

module.exports = [badGreet, greet];

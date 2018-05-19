'use strict';

function add(a, b) {
  if(typeof(a) !== 'number' || typeof(b) !== 'number'){
    return null;
  } else {
    return a + b;
  }
}

function subtract(a, b) {
  if (typeof(a) !== 'number' || typeof(b) !== 'number'){
    return null;
  } else {
    return a - b;
  }
}

module.exports = {
  add,
  subtract,
};
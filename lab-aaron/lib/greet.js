'use strict';
function greeting(name) {
  if(typeof name !== 'string'){
    return null;
  }else {
    return `Hi, ${name}`;
  }
}

module.exports = greeting;
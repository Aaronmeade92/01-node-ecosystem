'use strict';
function greeting(name) {
  if(name !== 'string'){
    return null;
  }else {
    return `Hi, ${name}`;
  }
}

module.exports = greeting;
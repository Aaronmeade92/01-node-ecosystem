'use strict';
const greet = require('../lib/greet');

describe('Greet module', () => {

  it('should reutrn null if not a string', () => {

    expect(badGreet()).toBeNull();
  });

  // it('greet returns a greeting when given a name')

});
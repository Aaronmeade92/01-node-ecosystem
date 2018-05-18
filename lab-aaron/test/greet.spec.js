'use strict';
const greet = require('../lib/greet');

describe('Greet module', () => {

  it('should return null if not a string', () => {

    expect(greet()).toBeNull();
  });

  it('should return a greeting when given a name', () => {
    
    expect(greet('Aaron')).toBe('Hi, Aaron');
  });
});
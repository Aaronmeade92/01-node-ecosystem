'use strict';
const math = require('../lib/math');

console.log('math', math);

describe('math module', () => {

  it('should return null if either number is not a number', () => {
    let expected = null;
    let actual = math.add();
    expect(actual).toBe(expected);
  });

  it('should return sum of the inputs', () => {
    
    let expected = 3;
    let actual = math.add(1, 2);
    expect(actual).toBe(expected);
  });
  
  it('should return null if either number is not a number', () => {
    let expected = null;
    let actual = math.subtract();
    expect(actual).toBe(expected);
  });

  it('should return the difference of the inputs', () => {
    let expected = 1;
    let actual = math.subtract(2, 1);
    expect(actual).toBe(expected);
  });
});
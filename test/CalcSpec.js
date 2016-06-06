/* global expect */
var calc = require('../js/calc');

describe('Perimeter', function () {
  it('can calculate the perimeter for a rectangular', function () {
    var length = 4;
    var width = 5;

    var perimeter = calc.perimeter(length, width);
    var expected = 19;

    expect(perimeter).toBe(expected);
  });
});
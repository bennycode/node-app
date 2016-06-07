/* global expect */

describe('Perimeter', function () {
  it('can calculate the perimeter for a rectangular', function () {
    var length = 4;
    var width = 5;

    var perimeter = window.calc.perimeter(length, width);
    var expected = 18;

    expect(perimeter).toBe(expected);
  });
});
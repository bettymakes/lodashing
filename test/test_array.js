const assert = require('assert');
const chunk = require('../array/chunk');

describe ('chunk', function() {
  it('should return a nested array with inner arrays no larger than the given size', function() {
    let expected = [['a', 'b'], ['c', 'd']];
    let actual = chunk(['a', 'b', 'c', 'd'], 2);

    assert.deepEqual(expected, actual);
  });

  it('should return inner arrays with a length of 1 if no size argument is given', function() {
    let expected = [['a'], ['b'], ['c'], ['d'], ['e']];
    let actual = chunk(['a', 'b', 'c', 'd', 'e'])

    assert.deepEqual(expected, actual);
  });

  it('should return an empty array if the size argument is less than 1', function() {
    let expected = [];
    let actual = chunk(['a', 'b', 'c', 'd', 'e'], -10);

    assert.deepEqual(expected, actual);
  });

  it('should return an empty array if an empty array is provided as an argument', function() {
    let expected = [];
    let actual = chunk([], 3);

    assert.deepEqual(expected, actual);
  });

  it('should return a chunked array if a String is provided instead of an array as an argument', function() {
    let expected = [['t', 'e', 's'], ['t', 'i', 'n'], ['g']];
    let actual = chunk('testing', 3);

    assert.deepEqual(expected, actual);
  });

  it('should return an empty array if the data type passed in is an object', function() {
    let expected = [];
    let actual = chunk({a: 'b', c: 'd', e: 'f'}, 2);

    assert.deepEqual(expected, actual);
  });

  it('should return an empty array if the data type passed in is an object', function() {
    let expected = [];
    let actual = chunk({a: 'b', c: 'd', e: 'f'}, 2);

    assert.deepEqual(expected, actual);
  });

  it('should return an empty array if the data type passed in is anything other than an array or string', function() {
    let expected = [];
    let actual = chunk(789456123, 2);

    assert.deepEqual(expected, actual);
  });
});

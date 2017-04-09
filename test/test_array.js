const assert = require('assert');
const chunk = require('../array/chunk');

describe ('chunk', function() {
  it('should return a nested array with inner arrays no larger than the given size', function() {
    let expected = [['a', 'b'], ['c', 'd']];
    let actual = chunk(['a', 'b', 'c', 'd'], 2);

    assert.deepEqual(expected, actual);
  });
});

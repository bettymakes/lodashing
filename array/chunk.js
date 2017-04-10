// =============================================================================
// Definition
// =============================================================================
// chunk(array, [size=1])

// Creates an array of elements split into groups the length of size. If array
// can't be split evenly, the final chunk will be the remaining elements.

// Arguments:
// array (Array): The array to process.
// [size=1] (number): The length of each chunk

// Example:
// chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

// chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]


// =============================================================================
// Sandbox
// =============================================================================
function chunk(arr, size = 1) {
  if ((!Array.isArray(arr) && typeof arr !== 'string') || size < 1) return [];
  if (typeof arr === 'string') { arr = arr.split(''); }

  let result = [];
  while(arr.length > 0) {
    result.push(arr.splice(0, size));
  }

  return result;
}



module.exports = chunk;
// =============================================================================
// Reference
// =============================================================================
// https://lodash.com/docs/4.17.4#chunk

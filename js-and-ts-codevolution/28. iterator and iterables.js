/**
 * 01. ITERABLE
 *
 * • It is an object, whose key is Symbol.iterator() method and it is going to return an iterator.
 *
 * Iterable {
 *   [Symbol.iterator](): Iterator
 * }
 *
 * 02. ITERATOR
 *
 * • It is an object, that implements a next() method.
 * • next() method knows how to access elements in a collection. (be it array, string, map or set)
 * • next() method returns an object. (say IteratorResultObj)
 * • IteratorResultObj has 2 properties -
 *  - 1st property (value): It can be of any datatype. Actual value in the collection.
 *  - 2nd property (boolean variable done): Tells us if the iteration is complete or not.
 *
 * Iterator{
 *   next(): IteratorResultObj
 * }
 *
 * IteratorResultObj{
 *  value: any,
 *  done: boolean,
 * }
 * 
 */

let iterableArr = [1, 2, 3, 4, 5];

function createIterator(array) {
  let count = 0;
  return {
    next: function () {
      return count < array.length
        ? { value: array[count++], done: false }
        : { value: undefined, done: true };
    },
  };
}

let myIterator = createIterator(iterableArr);
console.log(myIterator.next()); // output: 1, false
console.log(myIterator.next()); // output: 2, false
console.log(myIterator.next()); // output: 3, false
console.log(myIterator.next()); // output: 4, false
console.log(myIterator.next()); // output: 5, false
console.log(myIterator.next()); // output: undefined, true

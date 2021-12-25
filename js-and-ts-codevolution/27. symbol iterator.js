/**
 * 01. SYMBOL ITERATOR
 *
 * • In JS, the for-of loop works with only those objects which have the iterator method.
 * • To check for this we can check if the object has a key defined for Symbol.iterator
 */

let str = "Hello World";
let arr = [1, 2, 3, 4, 5];
let num = 100;
let employee = {
  id: 1355088,
  empName: "Saurabh",
};
console.log("For string " + typeof str[Symbol.iterator]); // output: function
console.log("For array " + typeof arr[Symbol.iterator]); // output: function
console.log("For number " + typeof num[Symbol.iterator]); // output: undefined
console.log("For object " + typeof employee[Symbol.iterator]); // output: undefined

// • Main use of Symbol.iterator is to check whether we can use a for-of loop with that object.

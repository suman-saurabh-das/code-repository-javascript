/**
 * 01. SET
 *
 * • It is a list that can contain only unique values.
 * • If we add a duplicate value to a set, it will ignore that particular value.
 * • We cannot access elements in a Set by index, because elements are not indexed. Instead we can check for existence of a value, iterate over elements or convert the set to an array.
 */

let mySet = new Set();
mySet.add("Word"); // adding string value to mySet.
mySet.add(1); // adding number value to mySet.
mySet.add(1); // adding duplicate value gets ignored.

// • When we add elements to a set, they get converted to String and then they are stored and then JS checks if the same string value is already there or not before adding.

// • But in case of objects, they are not converted into strings, so we can add duplicates also.
let obj1 = {};
let obj2 = {};
mySet.add(obj1);
mySet.add(obj2);
console.log("Size of mySet:", mySet.size); // logs the size (length of mySet)

// • We can initialise a set using an array.
let mySet2 = new Set([1, 2, 3, 4, 5, 5, 5]);
console.log("Size of mySet2:", mySet2.size); // output: 5 (duplicate values are ignored)

// • We can chain .add() method to add multiple elements to the set.
let mySet3 = new Set().add("Saurabh").add("Das");
console.log("Size of mySet3:", mySet3.size); // output: 2

// • To check whether a value exists in a set, we use the .has(valueToBeChecked) method.
console.log("\nCheck if 2 exists in mySet2:", mySet2.has(2)); // output: true

// • To delete a value from a set, we use the .delete(valueToBeDeleted) method.
mySet2.delete(1);
console.log("Check if 1 exists in mySet2:", mySet2.has(1)); // output: false

mySet2.delete(5);
console.log("Check if 5 exists in mySet2:", mySet2.has(5)); // output: false

// • Convert a set to an array
const myArray = [...mySet];
console.log("\nArray created from mySet:", myArray);

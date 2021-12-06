/**
 * 01. CONST KEYWORD
 *
 * • const keyword is used to create read only named constants.
 * • const declarations are also block scoped and are hoisted but stay in the temporal dead zone.
 */

// • A value must be assigned to const variables (initialisation and declaration together) and this cannot be changed in the same scope.
const num1 = 100;

// • Objects declared with const keyword cannot be reassigned to a new object.
const obj = {
  name: "Saurabh",
};
// obj = {
//     name: "Suman"
// }   // TypeError: Assignment to constant variable.

// • But values inside the object can be reassigned.
obj.name = "Suman";
console.log(obj.name, "\n");

/**
 * 02. LET vs CONST KEYWORD
 *
 * • Use let where re-declaration is expected. e.g. counter variable.
 * • Use const where re-initialization is not required. e.g. max size of an array.
 * • This helps prevent unwanted change in our code.
 */

// Constants
const PI = 3.15;
const MAX_ARRAY_SIZE = 100;

// Swap 2 variables
let num2 = 5, num3 = 10;
num2 = num2 + num3;
num3 = num2 - num3;
num2 = num2 - num3;
console.log(num2, num3);

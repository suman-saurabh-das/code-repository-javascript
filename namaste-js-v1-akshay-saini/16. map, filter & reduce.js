// 01. MAP: Map function is used to iterate through an array and create a new array by modifying each element based on the function that is passed to it.

const arr = [5, 2, 1, 4, 3];
// double
function double(val) {
  return 2 * val;
}
// number to binary
function numberToBinary(val) {
  return val.toString(2);
}
const doubleArr = arr.map(double);
console.log("Doubled Array:", doubleArr);
const binaryArr = arr.map(numberToBinary);
console.log("Binary Array:", binaryArr, "\n");

// 02. FILTER: Filter function is used to filter the values inside an array. This function also creates a new array based on the function that is passed to it.

const arr2 = [5, 2, 1, 4, 3];
function isOdd(val) {
  return val % 2 === 1;
}
function isEven(val) {
  return val % 2 === 0;
}
const oddArr = arr2.filter(isOdd);
console.log("Odd numbers:", oddArr);
const evenArr = arr2.filter(isEven);
console.log("Even numbers:", evenArr, "\n");

// Using arrow function to filter odd values
const oArr = arr2.filter((x) => x % 2 === 1);
console.log("Odd numbers:".oArr);
// Using arrow function to filter even values
const eArr = arr2.filter((x) => x % 2 === 0);
console.log("Even numbers:", eArr, "\n");

// 03. REDUCE: Reduce function is used to iterate/(operate on)/(take) all the values of the array and get a single value out of them. E.g. To find the sum of all elements in the array. Or to find the largest or smallest number in the array.

// Syntax
/*
  arrayName.reduce(function (accumulatorVal, currentValArray) {
    Logic (callback function)
    accumulatorVal is the final value that will be returned.
    currentValArray is the current value of the array while iterating the array.
  }, initialAccumulatorVal);
*/

const arr3 = [5, 2, 1, 4, 3];
// • Sum using reduce
const sumOfArr3 = arr3.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log("Sum of array elements:", sumOfArr3);

// • Max using reduce
const maxOfArr3 = arr3.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, Number.MIN_VALUE);
console.log("Maximum value in array:", maxOfArr3);

/**
 * 01. ARROW FUNCTIONS
 *
 * • Arrow functions: provide a short and concise syntax to write the functions and they also simplify the this keyword in JS.
 * • If there is a single statement inside our body, we can remove the curly brackets as well as the return keyword. But for multiple statements, { } and return keyword is compulsory.
 */

const getRegFuncVal = function () {
  return "Function expression";
};
console.log(getRegFuncVal());

const getArrFuncVal = () => {
  return "Arrow Function";
};
console.log(getArrFuncVal());

const getArrFuncVal2 = (x) => 100 + x;
console.log("Arrow Function:", getArrFuncVal2(1));

// • When we pass a single argument, we can even omit the parenthesis
const getArrFuncVal3 = y => 200 + y;
console.log("Arrow Function:", getArrFuncVal3(2));

// • Passing multiple parameters
const getArrFuncVal4 = (m, n) => 10 * m + n;
console.log("Arrow Function:", getArrFuncVal4(30, 3));

console.log("Type of arrow function:", typeof getArrFuncVal4); // returns function

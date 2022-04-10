// 01. HIGHER ORDER FUNCTION: A function which takes another function as a parameter/argument OR returns another function is know as higher order function.

// Call back function
function x() {
  console.log("Hello to the World\n");
}
// Higher order function
function y(x) {
  x();
}
y(x);
// Here x() is the call-back function and y() is the higher order function

// 02. FUNCTIONAL PROGRAMMING

const radius = [3, 1, 4, 2];

function area(radius) {
  return (Math.PI * radius * radius).toFixed(2);
}

function circumference(radius) {
  return (2 * Math.PI * radius).toFixed(2);
}

function diameter(radius) {
  return (2 * radius).toFixed(2);
}

function calculate(array, logic) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(logic(array[i]));
  }
  return output;
}
console.log("Area:", calculate(radius, area));
console.log("Circumference:", calculate(radius, circumference));
console.log("Diameter:", calculate(radius, diameter));

// • Optimising the code: DRY (Don't Repeat Yourself).
// • Code modularity: Breaking the program as small reusable functions.
// • Code reusability: Reusing the function with different parameters.

// • Polyfill for map method
function area(radius) {
  return (Math.PI * radius * radius).toFixed(2);
}

Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
console.log("\nArea:", radius.calculate(area));

// • Here we have used Array.prototype to add the calculate function to all the arrays.
// • i.e. We are modifying the in-built array to have this calculate function.
// • And we can access the array using the this keyword.

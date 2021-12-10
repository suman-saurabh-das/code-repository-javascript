/**
 * 01. REST OPERATOR
 *
 * • Using arguments array to print the value of arguments that are passed to the function.
 * • Here arguments is an array (contains an array of values passed to function as parameters).
 * • We are iterating through the array using a for-in loop and printing it.
 */
console.log("Using arguments -");
let displayColors = function () {
  for (let i in arguments) {
    process.stdout.write(arguments[i] + " ");
  }
  console.log();
};
displayColors("Red");
displayColors("Red", "Blue");
displayColors("Red", "Blue", "Green");
console.log();

// PROBLEM WITH ABOVE CODE
// • If we pass a myColor along with colors, it gets logged twice (once as a part of log(myColor) and other time as a part of log(arguments[i]))
console.log("Using arguments with additional parameter -");
let displayColors2 = function () {
  process.stdout.write(myColor + "\n");
  for (let i in arguments) {
    process.stdout.write(arguments[i] + " ");
  }
  console.log();
};
const myColor = "Yellow";
displayColors2(myColor, "Red");
displayColors2(myColor, "Red", "Blue");
displayColors2(myColor, "Red", "Blue", "Green");
console.log();

/**
 * ES2015 has the rest operator, which solves this problem.
 * • rest operator represents an indefinite number of arguments as an array.
 * • Syntax of rest operator : 
      function myFunc (...parameterArrayName) 
      { 
        // function body
      }
      myFunc(element1, element2, element3);
 */
console.log("Using rest operator -");
const myColor2 = "Yellow";
let displayColors3 = function (myColor2, ...colors) {
  console.log("Parameter:", myColor2);
  console.log("Rest Parameters:", colors);
  console.log("Arguments length:", arguments.length);
  for (let i in colors) {
    process.stdout.write(colors[i] + " ");
  }
  console.log("\n");
};
displayColors3(myColor2, "Red");
displayColors3(myColor2, "Red", "Blue");
displayColors3(myColor2, "Red", "Blue", "Green");

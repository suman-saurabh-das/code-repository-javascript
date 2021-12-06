/**
 * 01. VAR HOISTING AND FUNCTIONAL SCOPE
 *
 * HOISTING IN JS: Variable declarations occurs in the memory allocation phase and initialisation happens in the code execution phase. As a result, variables are first declared with undefined and then assigned a value. Hence we can access a variable even before initialising it in JS.
 *
 * • var declaration has a functional scope, i.e. Inside the function where it is defined, it can be accessed anywhere. For e.g. in below code we are able to access the greet variable even though it is inside the if-else block.
 */
function greetPerson1(name) {
  if (name === "Saurabh") {
    var greet = "Hello Saurabh (var variable & hoisting)";
  } else {
    var greet = "Hi there (var variable & hoisting)";
  }
  console.log(greet);
}
greetPerson1("Saurabh");

/**
 * 02. LET KEYWORD
 *
 * • let variable are also hoisted in JS, but they remain in the temporal dead zone i.e. we can't access them until the time they are assigned some value.
 * • let declaration has a block scope, i.e. they are only accessible inside the block { } where they are defined. For e.g. in below code we are not able to access the greet variable
 */
function greetPerson2(name) {
  if (name === "Saurabh") {
    let greet = "Hello Saurabh (let is block scoped variable)";
  } else {
    let greet = "Hi there (let is block scoped variable)";
  }
  console.log(greet); // ReferenceError: greet is not defined
}
// greetPerson2('Saurabh');

function greetPerson3(name) {
  let greet;
  if (name === "Saurabh") {
    greet = "Hello Saurabh (let variable)";
  } else {
    greet = "Hi there (let variable)";
  }
  console.log(greet);
}
greetPerson3("Saurabh");
console.log();

/**
 * 03. SCOPE & SHADOWING
 * • let has block scope so inside the if block, num2 variable is different from the one present outside & var has function scope, so in the whole function, num1 refers to the same variable
 */
var num1 = 10;
let num2 = 20;
if (true) {
  var num1 = 100;
  let num2 = 200;
  console.log("Block Scope", num1, num2);
}
console.log("Global Scope", num1, num2, "\n");

// • We can re-declare block variables in the same scope
var num3 = 10;
var num3 = 30;

// • We cannot re-declare let variables in the same scope
let num4 = 20;
// let num4 = 40; // SyntaxError: Identifier 'num4' has already been declared

// 04. LET INSIDE FOR LOOPS (CLOSURE)
for (let i = 1; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// In case of var i, the original reference of i is passed and by the time the timer ends, the value of i would be 6 and 6 would be printed 6 times instead of 1 2 3 4 5.
// In order to achieve 1 2 3 4 5 as output, we will use let keyword, as it is block scoped, a new reference will be passed every-time the loop is passed i.e. every-time i will be a new variable.

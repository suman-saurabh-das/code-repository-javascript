/**
 * 01. FUNCTION STATEMENT OR FUNCTION DECLARATION
 * 
 * • Functions declared using the function keyword.
 * • Function statements are hoisted.
 */
function fn1() {
  console.log("Function statement/Function declaration");
}
fn1();

/**
 * 02. FUNCTION EXPRESSION
 * 
 * • Functions assigned to a variable (initializing a variable with a function).
 * • Function expression are not hoisted.
*/
var fn2 = function () {
  console.log("Function Expression");
};
fn2();

/**
 * 03. ANONYMOUS FUNCTION
 * 
 * • Functions with no name.
 * • These are used when we need to use functions as values.
 * • E.g. Assigning functions to variables.
 *  - If we try to write anonymous function as a function statement, we get error.
 *  - It is a rule in ES6 that function statement must have a name.
*/

// function () {}  // SyntaxError: Function statements require a function name

/**
 * 04. NAMED FUNCTION EXPRESSION
 * 
 * • Named function assigned to a variable.
 * • In this case the named function is not created in the outer scope (i.e. d is not available in global scope)
 * • But it is created as a local variable, i.e. we can access this function inside the scope of d.
*/
var fn4 = function fn3() {
  console.log("Named Function Expression");
};
fn4(); // calling the function
// fn3(); // throws ReferenceError: fn3 is not defined in global scope

/**
 * 05. DIFFERENCE BETWEEN PARAMETERS & ARGUMENTS
 * 
 * • Arguments are actual values passed to the function.
 * • parameter1 and parameter2 are local variables inside the function x.
*/
function fn5(parameter1, parameter2) {
  console.log(parameter1, parameter2);
}
fn5("\nargument1", "argument2\n");

/**
 * 06. FIRST CLASS FUNCTIONS OR FIRST CLASS CITIZENS
 * 
 * • Ability to use functions as values (send a function as parameter/pass a function as argument or return a function from a function) is known as first class functions.
 *  - Functions can be passed into another function as a parameter.
 *  - Functions can also return a function.
*/

// • Function taking function as an input parameter
var inFunc = function () {
  console.log("Function calling a function passed as parameter");
};
function outFunc(param) {
  param();
}
outFunc(inFunc);

// • Function returning a function
function returnFunc() {
  return function () {
    console.log("Function returning a function");
  };
}
returnFunc()();

/**
 * 01. ARE LET & CONST DECLARATIONS HOISTED IN JS ?
 *
 * • let and const are hoisted (allocated memory), but they are present in the temporal dead zone, hence we cannot access them before assigning a value to them.
 *
 * • If we declare a variable using var, they get associated with the global object whereas if we declare them using let or const, they are present in a separate memory area and they can only be used after a value is assigned to them.
 */

// place debugger here
console.log(num1);
let num1 = 10;
var num2 = 100;

// num1 is assigned undefined but it is not attached to global object, it is present in a separate memory area. (Temporal dead zone). Hence, we cannot use the value of num1 before initializing.

// num2 is assigned undefined and is attached to global object hence we can access it without initialization.

/**
 * 02. WHAT IS TEMPORAL DEAD ZONE ?
 *
 * • It is the time since the let variable is declared and till it is initialized some value.
 *   In above example, num1 is assigned undefined on line 10 but it is in a different memory space (not in global object).
 *  On line 11, num1 is assigned a value of 10.
 * • The time between which the variable is declared and initialized is called temporal dead zone.
 * • If variables are present in temporal dead zone phase, we can use/access them only after initialization, otherwise we get ReferenceError.
 *
 * • In case of let we can declare a variable and initialize it later in our code.
 * • But in case of const it has to be declared and initialised in the same line.
 */

console.log(x); // Reference Error : Cannot access 'x' before initialisation
console.log(y); // Prints undefined
let x = 10;
// let x = 100; // Syntax Error: Identifier 'x' has already been declared
// var x = 50; // Syntax Error: Identifier 'x' has already been declared
var y = 50;
var y = 100; // No Error (We can redeclare a variable using var keyword)
// const z; // Syntax Error: Missing initializer in const declaration
const z = 1000;
z = 100; // Type Error: Assignment to constant variable.
console.log(w); // Reference Error: w is not defined

/**
 * 03. DIFFERENCE BETWEEN SYNTAX, REFERENCE & TYPE ERROR.
 *
 * • ReferenceError -
 *  - If we try to use/access a variable which is not defined, we get this error.
 *  - If we try to use a variable declared using let but not assigned any value, we get this error.
 *
 * • SyntaxError -
 *  - If we try to redeclare a variable created using let keyword, we get this error.
 *  - If we do not initialize a const, we get the SyntaxError.
 *  - Not a single line of code will be executed if we have syntax error in our code.
 *
 * • TypeError -
 *  - If we try to assign a value to const variable, we get the TypeError.
 *
 * • NOTE -
 *  - Always declare variables at the top, this will shrink the temporal dead zone window.
 *  - It is always suggested to use const wherever possible, if not use let.
 *  - Use var only when required and use it consciously.
 */

/**
 * 01. BLOCK
 * 
 *  • A block is defined by { }
 *  • It is also known as compound statement.
 *  • It is used to group together multiple JS statements.
 *  • Blocks/Groups are used when we want to execute multiple statements in a place, where JS is expecting a single statement.
 *  • E.g. if(condition) {…} 
 *  • In if condition, it expects a single statement, but by using a block we can group together multiple statements.
 */

// 02. BLOCK SCOPE: Whatever variables and functions we can access inside the block.
console.log("Compound statements");
if (true) {
  var num1 = 10;
  console.log(num1);
}
console.log();

console.log("Block Scope");
{
  var num2 = 10;
  let num3 = 20;
  const num4 = 30;
  console.log(num2);
  console.log(num3);
  console.log(num4);
}
console.log("\nGlobal Scope");
console.log(num2); // Accessible
// console.log(num3); // ReferenceError: Cannot access 'num3' before initialization
// console.log(num4); // ReferenceError: Cannot access 'num4' before initialization

// Here variable num2 is attached to global object hence it is accessible anywhere in our code, but variables num3 and num4 have a block level scope and they cannot be accessed outside the block.
// On reaching line 29, variables num3 and num4 are no longer present as the block has ended and the memory for num3 and num4 is cleared. But variable num2 is attached to global object and it gets printed.
// If we try to access num3 and num4 outside the block, we get a ReferenceError.

// 03. SHADOWING
// • If we have a variable X declared using var keyword in global scope as well as inside a block, then the variable initialization which comes later (block level in this case) gets assigned to the variable X.
console.log("Shadowing");
var num5 = 100;
{
  var num5 = 10;
  console.log(num5); // value of num5 is 10
}
console.log(num5, "\n"); // value of num5 is 10
// Here variable num5 is in global scope and block scope, and both point to same memory location.

// • If we have a variable `X` declared using let or const keyword in global scope as well as inside a block, then both the variables are stored in different memory locations.
let num6 = 100;
{
  let num6 = 10;
  console.log(num6); // value of num6 is 10
}
console.log(num6, "\n"); // value of num6 is 100
// Here the variable num6 is in a separate memory in GEC and variable num6 inside the block is in a different memory location. But inside the block, num6 = 10, shadows the value of num6 = 100;

// • Shadowing is also applicable to functions -
const num7 = 100;
function fn1() {
  const num7 = 50;
  console.log(num7);
}
fn1(); // value of num7 is 50
console.log(num7, "\n"); // value of num7 is 100

// 04. ILLEGAL SHADOWING
console.log("Illegal Shadowing");
let num8 = 10;
{
  // var num8 = 50; // SyntaxError: Identifier 'num8' has already been declared
}
// Here we are trying to cross the boundary of the scope as var has function level scope.

var num9 = 10;
{
  let num9 = 50; // valid shadowing
}
// Here var num9 is declared but in global scope, and so we can redeclare num9 using let which will be created in a separate memory space and we are in the boundary of the block.

// NOTE - Lexical scope also works for block. E.g. -
const num10 = 20;
{
  const num10 = 40;
  {
    const num10 = 60;
  }
}
console.log(num10);

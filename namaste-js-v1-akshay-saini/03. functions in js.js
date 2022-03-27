/** 01. FUNCTION EXECUTION IN JS */

// Example Code -
var x = 1;
a();
b();
console.log(x);
function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}

/**
 * Step 1: Global execution context (GEC) is created, memory is assigned to variables, and functions point to function definition.
 * 
 * Step 2: Code execution starts.
 * Step 3: (GEC) variable x is assigned value of 1
 * Step 4: On reaching function call, a new execution context is created (a) with its own memory component and code component.
 *  
 *  Step 5: A new variable x is created and assigned the value of undefined.
 *  Step 6: Code execution starts, x is assigned a value of 10.
 *  Step 7: Value of x from local context (a) is printed i.e. x = 10.
 * 
 * Step 8: Local execution context (a) is deleted and control moves to GEC.
 * Step 9: On reaching function call, a new execution context is created (b) with its own memory component and code component.
 *  
 *  Step 10: A new variable x is created and assigned the value of undefined.
 *  Step 11: Code execution starts, x is assigned a value of 100.
 *  Step 12: Value of x from local context (b) is printed i.e. x = 100.
 * 
 * Step 13: Local execution context (b) is deleted and control moves to GEC.
 * Step 14: Value of x from global context (GEC) is printed i.e. x = 1.
 * 
 * Step 15: GEC is deleted and program ends.
 */

/**
 * 01. SHORTEST PROGRAM IN JS
 *
 * • In JS, the shortest program is the empty file.
 *  - Even though the file is empty, a global execution context (memory space is setup), a global object (window) and this variable is created.
 *  - NOTE: JS runs on different browsers (chrome, mozilla, internet explorer) and servers (node) by JS engine and wherever it runs, a GEC, global object and this variable is always created.
 *
 * • Global space: in browser
 *  - Any variable (declared using var) or function that is not declared inside any function is in global space.
 *  - These variables and functions are attached to the window object and can be accessed by -
 *    window.varName or varName or this.varName
 *
 * • window object: in browsers
 *  - Global object is created by JS engine automatically whenever a GEC is created.
 *  - It has a lot of pre-defined methods and variables inside it. E.g. alert()
 *  - JS engine also creates a this keyword and at global level, this points to window object.
 *    i.e. at global level, this === window results in true.
 */

/**
 * 02. UNDEFINED
 * 
 *  • Keyword that is used as a placeholder to initialize variables until they are assigned a value.
 *    (During memory allocation phase, memory is assigned to variables using undefined)
 *  • Undefined doesn't mean that it is null or empty, it takes up some space in memory.
 *
 * 03. NOT DEFINED
 * 
 *  • It is a variable or function that has not been defined in any part of the whole code.
 *  • It means that memory has not been allocated.
 *
 * 04. JS is a loosely typed language i.e. It doesn't attaches the variable with any specific datatype.
 *  • So we can create a variable `x` and store numbers, string or boolean inside it.
 *  • It is also known as a weakly typed language.
 *
 * • NOTE: It is not a good practice to assign any variable with undefined.
 */

var a;
if (a === undefined) {
  // returns true
  console.log("a is undefined");
} else {
  console.log("a is not undefined");
}

var x;
console.log(x); // undefined
x = 10;
console.log(x); // 10
x = "hello world";
console.log(x); // hello world

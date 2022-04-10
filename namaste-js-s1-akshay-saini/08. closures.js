// 01. CLOSURE: Function bound (bundled) together with its lexical environment forms a closure.
function fn1() {
  var num1 = 25;
  function fn2() {
    console.log("closure:", num1); // 25
  }
  fn2();
}
fn1();
// Here fn2() has variable num1 from fn1() bound together to form a closure.
console.log();

// 02. In JS we can -
// • Assign functions to variables.
// • Pass a function as a parameter.
// • Return a function from a function.

// • Assign functions to variables.
var v1 = function fn2() {
  console.log("function expression");
};
v1();

// • Pass a function as a parameter.
function fn3() {
  console.log("callback function");
}
function fn4(func) {
  func();
}
fn4(fn3);
console.log();

// • Return a function. (Returns the function definition/code)
function fn5() {
  var num2 = 25;
  // function fn6() {
  //   console.log("closure:", num2);
  // }
  // return fn6;

  return function fn6() {
    console.log("closure:", num2);
  };
  // lines 36-39 & 42-44 are same code, just the return is placed in different location.
}
var v2 = fn5();
console.log(v2); // function[fn6]
// ... many more code
v2(); // returns 25 (as it remembers the lexical scope where it came from)
// Here num2 doesn't refer to value, it refers to the reference.

// When functions are returned from a function, they still maintain their lexical scope. i.e. when the function was returned, along with the code its lexical environment was also returned, i.e. a closure was returned.
console.log();

// 03. CORNER CASES OF CLOSURES

// • References are returned along with function and not the value of the variable. The function remembers the reference to the variable and not the value.
function fn7() {
  var num3 = 25;
  function fn8() {
    console.log("closure:", num3);
  }
  num3 = 50;
  return fn8;
}
var v3 = fn7();
console.log(v3);
// … many more lines of code
v3(); // returns 50 (as it remembers the lexical scope where it came from)
// Here num3 doesn't refer to value, it refers to the reference of num3.

// • Function nested inside function, nested inside another function, if we try to access the variables of parent from the deepest of level, it is still possible.
function fn8() {
  var num4 = "100";
  function fn9() {
    var num5 = "50";
    function fn10() {
      console.log("\n", num4, num5);
    }
    fn10();
  }
  fn9();
}
fn8();
// • Here fn10() forms a closure with its parent fn9() and also with parent's parent fn8()
// • And the closure has the lexical scope of both the parents.
// • So if we return function fn10() outside, the variables num4 and num5 would be retained and memory for them will not be garbage collected.

/**
 * 04. SOME USE CASES OF CLOSURES -
 *
 * • Module Design Pattern
 * • Currying
 * • Functions like once
 * • Memoize
 * • Maintaining state in async world
 * • setTimeouts
 * • Iterators
 */

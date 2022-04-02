// 01. CLOSURE: A function bundled together with its outer environment (lexical environment) forms a closure. i.e. Each and every function in JS has access to the variables and functions of its parents. Even when this function is executed in some other scope (e.g. When we return the function and call it somewhere else in the code), it still remembers its outer lexical environment where it was originally present.

// E.g. of closure
function outerFunc1() {
  var num1 = 10;
  function innerFunc1() {
    console.log("Closure 1:", num1);
  }
  innerFunc1();
}
outerFunc1();

// • Here instead of var even if we use let, the closure will behave in same way and print 10 even though let is blocked scope, this is because value of num1 will be retained in the memory and it will not be garbage collected.

// E.g. of closure II
function outerFunc2() {
  var num2 = 20;
  function innerFunc2() {
    console.log("Closure 2:", num2);
  }
  return innerFunc2;
}
// • Here outerFunc() returns the innerFunc and the second () calls the innerFunc
// outerFunc2()();
// Below is same as writing outerFunc2()()
var closure2 = outerFunc2();
closure2();

// • Now if we pass a parameter 'num3' to the outer function, it will still form a closure and we can pass a value to the outer parameter 'num3' while calling the outerFunc3()
function outerFunc3(num3) {
  var num4 = 40;
  function innerFunc3() {
    console.log("Closure 3:", num3, num4);
  }
  return innerFunc3;
}
outerFunc3(30)();

// • We can have any level of nesting, but closures will still behave the same.
function outermostFunc() {
  var c = 70;
  function outerFunc(b) {
    var a = 50;
    function innerFunc() {
      console.log("Closure 4:", a, b, c);
    }
    return innerFunc;
  }
  return outerFunc;
}
outermostFunc()(60)();
console.log();

// • If a variable with conflicting name is present in the global and local scope (considering it is defined using let which has block scope), the function will use the variable in the local scope as it is pointing to that reference.
// • If a variable is not present in the function, JS will try to search for it in its scope chain and if it is not present in the scope chain also, it will throw a reference error.

/**
 * 02. ADVANTAGES OF CLOSURE -
 * • Used in module design pattern.
 * • Used in higher order functions like once and memoize.
 * • Used in function currying.
 * • Used in data hiding and encapsulation.
 * • E.g. We can take advantage of closure to have data privacy over variables (we can control which functions should access that variable) so that other functions or other part of code cannot access it.
 */

function counter() {
  let count = 0;
  function incrementCounter() {
    count++;
    console.log("Counter value:", count);
  }
  return incrementCounter;
}
let myCounter1 = counter();
myCounter1();
myCounter1();
myCounter1();
console.log();

// • Scalable counter using constructor function
function Counter() {
  let count = 0;
  this.incrementCounter = function () {
    count++;
    console.log("Incremented count:", count);
  };
  this.decrementCounter = function () {
    count--;
    console.log("Decremented count:", count);
  };
}
let myCounter = new Counter();
myCounter.incrementCounter();
myCounter.incrementCounter();
myCounter.decrementCounter();
console.log();

/**
 * 03. DISADVANTAGES OF CLOSURES -
 * • Every time a closure is formed, there is memory consumption.
 * • There can be an over consumption of memory as the variables are not garbage collected.
 */

// 04. GARBAGE COLLECTOR: In JS, it is used to free up the un-utilised memory.
// • It checks for the variables which are no longer in use and frees up the memory.
function outerFunc4() {
  let x = 10;
  return function innerFunc4() {
    console.log("Garbage collection:", x);
  };
}
let closure4 = outerFunc4();
closure4();

// • Smart garbage collection by chrome V8 engine: If there are unused variables inside the closure, then they are garbage collected but the variables which are being used are not.
function outerFunc5() {
  let x = 10,
    z = 20;
  return function innerFunc5() {
    console.log("Garbage collection:", x);
  };
}
let closure5 = outerFunc5();
closure5();
console.log();

// 05. OUTPUT BASED QUESTIONS
function fn1() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 2000);
  console.log("Namaste JS !");
}
// fn1();

// • Here Namaste JS is printed first and after 2 seconds, 1 is printed.
// • This is because JS code execution does not wait for setTimeout() function to finish.
// • It directly moves on to the next line of code and the setTimeout() forms a closure in a separate space which completes its execution after 2 seconds.

function fn2() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  }
}
// fn2();

// • Here all setTimeout() functions point to the same reference of i. Hence 6 is printed after every second because the value of i has already become 6 even before the first setTimeout() function runs.

function fn3() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);
  }
}
// fn3();

// • Here all setTimeout() functions point to different reference of i (as it has been declared via let). A separate instance of i is present with the lexical scope of each setTimeout() function)
// • Each time the setTimeout() is called, it forms a closure with a new variable i (as let has block scope)

function fn4() {
  for (var i = 1; i <= 5; i++) {
    function closure(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    closure(i);
  }
}
fn4();

// • Here we have used var x and a function to create a closure which will provide the setTimeout() a new copy of i every time it is called.

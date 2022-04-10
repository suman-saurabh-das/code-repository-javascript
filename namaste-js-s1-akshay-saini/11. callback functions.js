/**
 * 01. CALLBACK FUNCTIONS
 * 
 * • We know that in JS, the functions are first class functions.
 *   (functions can take function as parameter and return a function as well).
 * • When we pass a function into another function as a parameter, then the function which is being passed is called as Callback function.
 * • By using Callback functions, we can use JS asynchronously.
 *   E.g. setTimeout(function () {…}, 1000)
*/

// • E.g. Here function `callbackFunc` will run whenever function myFunc is called.
// Changing the flow of execution
function myFunc(callbackFunc) {
  console.log("I am x");
  callbackFunc();
}
// • Here `callbackFunc` is the callback function
function cb() {
  console.log("I am y");
}
myFunc(cb);

// • Callback functions are called so because these functions are called in some later part of the code. Here we are giving responsibility of calling the passed function to another function.

/**
 * 02. MAIN THREAD
 * 
 * • JS has only one call stack which is known as the main thread. Whatever is executed in the page is executed through the call stack only. If any operation blocks the call stack, it is known as blocking the main thread.
 * • We should not block our main thread, we should use async operations for performing tasks which take time. E.g. By use of setTimeout() method.
*/

/**
 * 03. EVENT LISTENERS
 * 
 * • Event listeners are heavy (take up memory), as the memory associated with it cannot be freed up (garbage collected), because we never know when that event might get triggered.
 * • So it is good practice to remove event listeners when not in use.
*/
document
  .getElementsByClassName("title")[0]
  .addEventListener("click", function btnClicked() {
    console.log("Header Clicked");
  });

// • Event listener with closures
function attachEventListeners() {
  let count = 0;
  document
    .getElementById("inc-count-btn")
    .addEventListener("click", function btnClicked() {
      count++;
      document.getElementById("count-value").innerText = count;
    });
  document
    .getElementById("dec-count-btn")
    .addEventListener("click", function btnClicked() {
      count--;
      document.getElementById("count-value").innerText = count;
    });
}
attachEventListeners();

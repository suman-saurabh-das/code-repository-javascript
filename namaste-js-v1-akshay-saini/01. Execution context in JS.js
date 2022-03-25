/**
 * 01. EXECUTION CONTEXT
 *
 * • Everything in JS happens inside an Execution context.
 *
 * • Execution context has 2 parts -
 *  - Memory Component (Variable environment): Contains variables and function as key value pairs.
 *  - Code Component (Thread of execution): Code is executed one line at a time.
 *
 * • JS is a synchronous, single threaded language.
 *  - i.e. JS can execute a single command at a time and in a specific order.
 *
 * • Call stack maintains the order of execution of execution contexts.
 *  - Used to manage the execution context creation, deletion and control.
 *  - a.k.a: Execution Context stack, Program stack, Control stack, Runtime stack, Machine stack.
 */

var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);

/**
 * CALL STACK
 *
 * • Initially call stack is empty ⇾
 *  - Global Execution Context created at the bottom ⇾
 *    - Execution Context 1 created on top of GEC (when square(2) gets called) ⇾
 *    - Execution Context 1 deleted (square2 is assigned 4) ⇾
 *  - Control is back to GEC ⇾
 *    - Execution Context 2 created on top of GEC (when square(4) gets called) ⇾
 *    - Execution Context 2 deleted (square4 is assigned 16) ⇾
 *  - Control is back to GEC ⇾
 * • Global Execution Context deleted ⇾ Program ends call stack is empty.
 */

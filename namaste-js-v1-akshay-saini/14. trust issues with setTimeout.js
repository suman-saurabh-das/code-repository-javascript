/**
 * 01. SET TIMEOUT
 * 
 * • setTimeout() function does not always takes the set amount of time to execute, it may take more than that time also, this depends on the call-stack.
 */

console.log("Start 1");
setTimeout(function callBack() {
  console.log("Callback 5ms");
}, 5000);
console.log("End 1");

// While loop that takes 10 seconds to run
let startTime = new Date().getTime();
let endTime = startTime;
while (endTime < startTime + 10000) {
  endTime = new Date().getTime();
}
console.log("While loop expired");

// • Here while loop takes 10 seconds to run, till then the call-stack remains blocked. Even though the callback function is ready to be pushed to call-stack from callback queue, the event loop waits for the call-stack to be empty and after 10 seconds when call-stack becomes empty, the callback function gets pushed to the call-stack.

// • JS is synchronous single threaded language and it has a single call-stack and code is executed there itself. This makes JS a kind of interpreted language and as a result it is very fast as it does not have to wait for whole code to get compiled, it has just in time compilation.

// • Deferring the execution of callback function -
console.log("Start 2");
setTimeout(function callBack() {
  console.log("Callback 0ms");
}, 0);
console.log("End 2");

// • Here even though the timer is zero, the code in setTimeout() function will execute only after the Global Execution context finishes execution and call-stack is empty. Once the call-stack is empty, the callback function will be pushed from the callback queue to the call-stack. So output will be : Start 2 -> End 2 -> Callback 0ms
// • This is called the concurrency model in JS.

/**
 * 01. EVENT LOOP
 *
 * • JS is a synchronous single threaded language.
 * • It has one call stack and it can do only one thing at a time.
 * • Call stack is present in the JS engine and all the code is executed inside this.
 *
 * • Browser contains JS engine, which contains the call stack where all code is executed.
 * • Browser also has Web APIs which give access to timer, local storage, it can connect to external URL links, access Bluetooth, location, etc. These web APIs can be used by the JS code.
 *  - E.g. setTimeout(), DOM APIs, fetch(), local storage, console, location, etc.
 *
 * • Global execution context has window object using which JS code can access the Web APIs. As window is a global object, even if we do not use the window keyword, we can access the Web API's directly without using dot operator.
 */

// setTimeout example
console.log("Start - setTimeout");
setTimeout(function () {
  console.log("Callback from setTimeout");
}, 3000);
console.log("End - setTimeout\n");
/**
 * • GEC in pushed in the stack.
 * • JS uses the console API to log "Start" in the console.
 * • When setTimeout() function runs, a call-back function is registered in Web APIs environment and a 5000ms timer starts.
 * • JS uses the console API to log "End" in the console.
 * • GEC is popped out of the stack.
 *
 * • As soon as the 5000ms timer expires, the callback function needs to be in the call-stack to be executed, but it cannot go directly in call-stack.
 * • The call-back function moves to the callback queue once the timer expires.
 *
 * • Event loop checks the call stack and if it is empty, puts the callback functions from callback queue in the call-stack. Event loop acts like a gate keeper, it checks the callback queue and pushes any function in it into the call stack when the call-stack is empty.
 * • JS uses the console API to log "Callback from setTimeout" in the console.
 *
 * • Event loops job is to continuously monitor the call-stack and callback queue.
 * • When it sees that call-stack is empty and there is a function in the callback queue waiting to be executed, it pushes that function into the call-stack.
 * • Now the callback method gets executed.
 */

// onClick event listener example
console.log("Start - event listener");
document.getElementById("callback-btn").addEventListener("click", function () {
  alert("Callback from event listener");
  console.log("Callback from event listener");
});
console.log("End - event listener\n");
/**
 * • Why do we need the callback queue ?
 *  - If we have multiple callback functions, then they will be executed one after another in the order in which they are present in the queue. E.g. If we click on a button multiple times.
 */

console.log("Start - fetch api");
setTimeout(function cbT() {
  console.log("Callback from setTimeout");
}, 1500);
fetch("https://api.github.com/users/suman-saurabh-das").then(function cbF() {
  console.log("Callback from github api");
});
// Lots of code…
console.log("End - fetch api");
/**
 * • fetch(): It is used to go to an URL and request an API call. The fetch function returns a promise, and takes a callback function which is executed once the promise is resolved.
 * • NOTE: fetch() method behaves differently than other APIs.
 * • For e.g. In the above code even if the cbF function is completed first, it does not move in to the callback queue, it goes to micro-task queue.
 *
 * • Micro-task Queue: Exactly similar to the callback queue but has higher priority.
 * • cbF function goes in the micro-task queue.
 * • Functions in micro-task queue will be executed before the functions in callback queue.
 * • NOTE: All the callback functions which comes from promises and mutation observer will go inside the micro-task queue.
 *  - Read more about Promises and Mutation observer.
 *
 * • Callback queue is also called Task-queue/Macro-task-queue.
 * • Starvation of the callback queue: When the function inside the micro-task queue, creates a new micro-task inside itself and it continues. Due to this, the functions inside the callback queue does not get the chance to be executed, this is known as starvation.
 */

/**
 * 02. QUESTIONS -
 *
 * • When does the event loop actually start ?
 *  - Event loop, as the name suggests, is a single-threaded, loop that is `almost infinite`. It's always running and doing its job.
 *
 * • Are only asynchronous web API call-backs are registered in the web API environment?
 *  - Yes, the synchronous callback functions like what we pass inside map, filter and reduce aren't registered in the Web API environment. It's just those async callback functions that go through all this.
 * 
 * • Does the web API environment store only the callback function and pushes the same callback to callback queue/micro-task queue?
 *  - Yes, the callback functions are stored in the web API environment, and a reference is scheduled in the queues. Moreover, in the case of event listeners (e.g. click handlers), the original callbacks stay in the web API environment forever, that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.
 *
 * • How does it matter if we set delay for setTimeout to be 0ms. Then will the callback move to queue without any wait?
 *  - No, there are trust issues with setTimeout(). The callback function needs to wait until the call-stack is empty. So the 0ms callback might have to wait for 100ms also if the call-stack is busy.
 */

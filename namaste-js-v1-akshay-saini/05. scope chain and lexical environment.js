/**
 * 01. SCOPE CHAIN & LEXICAL ENVIRONMENT
 * 
 * • Scope: means where we can access a specific variable or a function inside our code.
 * 
 * • Lexical environment: It is the local memory along with the lexical environment of its parent.
 *  - Lexical: means hierarchy or in sequence or in order (where a code is present physically).
 * 
 * • Scope chain: Chain of lexical environments is called as the scope chain.
 *  - If a variable or function is not present in this chain, it means that it is not defined.
 */

function outer() {
  var num = 10;
  inner();
  function inner() {
    console.log(num);
  }
}
outer();
console.log(num); // ReferenceError: num is not defined (in global scope)

// Here lexical parent of function inner is function outer.
// And lexical parent of function outer is Global execution context.
// And lexical parent of Global execution context is null.

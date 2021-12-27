/**
 * 01. GENERATOR
 *
 * • It is a special type of function which can be paused during execution, then perform some other code then again resume its execution from where we left off.
 * • This pausing is possible due to `yield` keyword.
 * • Syntax: function* funcName() { functionBody }
 */

function* createGenerator() {
  console.log("Start execution");
  yield 1;
  console.log("Pause execution");
  yield 2;
  console.log("Complete execution");
}

let myGen = createGenerator();
console.log(myGen.next()); // logs "Start execution" & yield { value:1, done: false }
console.log(myGen.next()); // logs "Pause execution" & yield { value:2, done: false }
console.log(myGen.next()); // logs "Complete execution" & yield { value: undefined, done: true }

// • Generators can be used to simplify our code when we write our own iterator.
let person = {
  fName: "Alex",
  lName: "Baron",
};

person[Symbol.iterator] = function* () {
  let properties = Object.keys(person);
  for (let t of properties) {
    yield this[t];
  }
};

console.log("\nIterating over person object using for-of loop");
for (let p of person) {
  console.log(p);
}

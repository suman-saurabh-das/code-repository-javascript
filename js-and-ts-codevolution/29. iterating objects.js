/**
 * 01. ITERATING OBJECTS
 *
 * • Plain JS objects do not work with the for-of loop because they do not have iterables method.
 */

let employee = {
  eId: "13141190",
  eName: "Saurabh",
  eAge: 22,
};

// • Creating our own iterator method.
employee[Symbol.iterator] = function () {
  let properties = Object.keys(employee); // contains key-value pairs
  let count = 0; // keeps track of the count
  let isDone = false; // boolean flag to indicate if iteration is completed
  let next = () => {
    if (count >= properties.length) {
      isDone = true;
    }
    return { done: isDone, value: this[properties[count++]] };
  };
  return { next };
};

console.log("Iterating over employee object using for-of loop");
for (let p of employee) {
  console.log(p);
}

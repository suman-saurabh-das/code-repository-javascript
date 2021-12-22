/** 01. ITERATING OVER MAPS */

// • We can initialise a map using an array.
let nameMap = new Map([
  ["fName", "Saurabh"],
  ["lName", "Das"],
]);

// • To iterate over keys we use: map.keys() in a for-of loop.
console.log("Iterating and logging keys -");
for (let key of nameMap.keys()) {
  process.stdout.write(key + " ");
}

// • To iterate over values we use: map.values() in a for-of loop.
console.log("\n\nIterating and logging values -");
for (let value of nameMap.values()) {
  process.stdout.write(value + " ");
}

// • If we want both key and value we use: map.entries() in a for-of loop.
console.log("\n\nIterating and logging keys & values -");
for (let entry of nameMap.entries()) {
  process.stdout.write(`${entry[0]}: ${entry[1]}\n`);
}

// • Or we can use array destructuring with map.entries()
console.log("\nIterating and logging keys & values -");
for (let [key, value] of nameMap.entries()) {
  process.stdout.write(`${key}: ${value}\n`);
}

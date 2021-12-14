/**
 * 01. FOR-OF LOOP
 *
 * • The for-of statement executes a loop that operates on a sequence of values sourced from an iterable object.
 * • Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.
 */

// • It is used to iterate over iterables.
let colors = ["red", "green", "blue", "yellow", "orange"];

// • for-in loop
for (let index in colors) {
  process.stdout.write(colors[index] + " ");
}
console.log();

// • for-of loop
for (let color of colors) {
  process.stdout.write(color + " ");
}
console.log();

// • for-of loop in Strings
// • In strings, for-of loop takes individual characters from the string and iterates over it.
let letters = "ALEX";
for (let letter of letters) {
  process.stdout.write(letter + " ");
}

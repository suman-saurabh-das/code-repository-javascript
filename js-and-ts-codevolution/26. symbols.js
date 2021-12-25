/**
 * 01. SYMBOL
 *
 * • Symbol is a new primitive datatype introduced in ES2015.
 * • The purpose of a symbol is to generate a unique id. (but we can't access that id)
 */

// • Creating a symbol.
let s = Symbol(); // Here we do not use the new keyword.
console.log("Type of symbol:", typeof s); // symbol

// • We can pass a string as a parameter while creating a symbol, which will be its description.
let s1 = Symbol("This is a S1 symbol description");
// • To get the description, we can use toString() method on symbol.
console.log("Description of symbol:", s1.toString(), "\n");

// • A symbol always has a unique id and is never equal to another symbol even if the description is same.
let s2 = Symbol("description");
let s3 = Symbol("description");
console.log("Symbols comparison s2 === s3:", s2 === s3); // output: false

// • We can add a symbol to a global registry and then we can retrieve it. (using for() method)
// • To add a symbol to global registry, we use below code -
let s4 = Symbol.for("RegSymbol");
let s5 = Symbol.for("RegSymbol");
console.log("Symbols comparison s4 === s5:", s4 === s5); // output: true

// • NOTE: If a symbol already exists in global registry, it will not get added again instead the existing one will be used. (i.e. when we try to create s5 with same description as s4, s5 gets the same reference as s4)

// • If we want the key for the symbol when it was added to global registry, we have a method: symbol.keyFor(symbolName)
console.log("\nSymbol description when added to registry:", Symbol.keyFor(s4)); // output: symbol description

// • Symbols can be used in object properties: to make them unique as they will never conflict with any existing method or being over-written accidentally.
let fName = Symbol("First Name");
let person = {
  [fName]: "Saurabh",
};
console.log("\nSymbol as a key in an object:", person[fName]);

// • To list the symbols used for an object.
console.log(
  "List the symbols used for an object:",
  Object.getOwnPropertySymbols(person),
);

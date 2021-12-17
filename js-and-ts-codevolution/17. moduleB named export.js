/**
 * 01. MODULE B (IMPORTING VARIABLES)
 *
 * • To import a variable, we use the `import` keyword, followed by name of the variable inside {} and the relative file path.
 * • NOTE: name of the variable being imported must match the name being exported.
 */
import { fName, lName } from "./17. moduleA named export.js";
console.log(`Named import: ${fName} ${lName}`);

// • We can also use alias to import the variables with a different name.
import { fName as fN, lName as lN } from "./17. moduleA named export.js";
// • But now we will have to use the alias names instead of fName and lName.
console.log(`Named import with alias: ${fN} ${lN}`);

// • Importing multiple variables.
import { a, b, c, d } from "./17. moduleA named export.js";
console.log(`Importing multiple variables: ${a}, ${b}, ${c}, ${d}`);

/**
 * • Module imports are hoisted.
 * • i.e. import statements will be moved to the top of the order of execution and then the other lines of codes will be executed.
 */

// • Import statements are read-only.
// fName = "Alex"; // TypeError: Assignment to constant variable.

// • But we can change the properties of objects that have been imported.
import { obj } from "./17. moduleA named export.js";
obj.color = "green";
console.log("\nModifying an imported object property", obj.color); // prints green

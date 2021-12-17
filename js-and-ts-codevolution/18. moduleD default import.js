/**
 * 01. MODULE D (IMPORTING VARIABLES)
 *
 * • While importing a default variable, there are a few changes as well -
 *  - We need to remove the curly braces {}. (otherwise it will throw SyntaxError)
 *  - Name of the variable being imported does not have to match the one being exported.
 */

import firstName from "./18. moduleC default import.js";
console.log("Default import:", firstName);

// • We can also use an alias while importing default. (but here we need to use {})
import { default as f } from "./18. moduleC default import.js";
console.log("Default import with alias:", f);

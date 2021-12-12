/**
 * 01. ARRAY DESTRUCTURING
 *
 * • The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
 */
console.log("Array destructuring (all array elements)");
let person = ["Saurabh", "Das", "Male"];
let [fName, lName, gender] = person;
console.log(fName, lName, gender);

// • If the number of variables is more than the array elements, the variables remain undefined.
console.log("\nArray destructuring (variables more than array elements)");
let person2 = ["Sudipta", "Pahar"];
let [fName2, lName2, gender2] = person2;
console.log(fName2, lName2, gender2);

// • We can also destructure specific elements that we require e.g. we only want the gender.
console.log("\nArray destructuring (specific array elements)");
let person3 = ["Subhasis", "Paul", "Male"];
let [, , gender3] = person3;
console.log(gender3);

// • We can also use the rest operator while destructuring, but rest operator must come at the last.
let fruits = ["Mango", "Apple", "Grapes", "Strawberry"];
let [kingFruit, redFruit, ...otherFruits] = fruits;
console.log("\nDestructuring with rest operator");
console.log(kingFruit);
console.log(redFruit);
console.log(otherFruits);

// • We can also destructure using default values.
console.log("\nDestructuring with default values");
let employee = ["Suman"];
let [eName = "user", eId = "1355088"] = employee;
console.log(eName + " " + eId);

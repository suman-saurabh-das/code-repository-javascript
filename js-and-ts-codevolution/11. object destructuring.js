/**
 * 01. OBJECT DESTRUCTURING
 *
 * • Destructuring an object is similar to array destructuring but we have to use {} instead of [] and the variable names must be same as the property name.
 */
let employee = {
  firstName: "Saurabh",
  lastName: "Das",
  age: 23,
};

let { firstName, lastName, age } = employee;
console.log("Object destructuring:", firstName, lastName, age);

// • If we want the variable names to be different from the property names, we can use aliases.
let employee2 = {
  firstName2: "Saurabh",
  lastName2: "Das",
  age2: 23,
};

let { firstName2: f, lastName2: l, age2: a } = employee2;
console.log("Object destructuring:", f, l, a);

/**
 * 01. OBJECT LITERAL
 *
 * • It is a comma-separated list of name-value pairs inside of curly braces. e.g. person
 * • If we have property name same as variable name then we can use shorthand notation. e.g. person2
 */
let firstName = "Saurabh";
let lastName = "Das";

let person = {
  firstName: firstName,
  lastName: lastName,
};
console.log("Object literal: " + person.firstName + " " + person.lastName);

let person2 = {
  firstName,
  lastName,
};
console.log(
  "Object literal: " +
    person.firstName +
    " " +
    person.lastName +
    " (shorthand notation)\n",
);

// • Returning objects from a function -
//    https://www.javascripttutorial.net/javascript-return-multiple-values/
// • We have shorthand notation for returning an object from a function as well.
function createPerson(firstName, lastName, age) {
  let fullName = firstName + " " + lastName;

  // return {
  //     firstName: firstName,
  //     lastName: lastName,
  //     fullName: fullName,
  //     isSenior: function() {
  //         return age > 60;
  //     }
  // }

  return {
    firstName,
    lastName,
    fullName,
    isSenior() {
      return age > 60;
    },
  };
}

let p = createPerson("Suman", "Das", 24);
console.log("First name:", p.firstName);
console.log("Last name:", p.lastName);
console.log("Full name:", p.fullName);
console.log("Is senior:", p.isSenior(), "\n");

// • We can have spaces in object property names but we must enclose them in ""
// • While accessing the property, we will have to use the [] notation instead of .
// • We can also use variables as property names but we must enclose them in []
// • While accessing the property, we will have to use the [] notation instead of .

let redFruit = "red fruit";
let fruits = {
  "my fruit": "Mango",
  [redFruit]: "Apple",
};
console.log("Fruits:", fruits["my fruit"], fruits[redFruit]);

/**
 * 01. CLASS
 *
 * • Classes are a template for creating objects.
 * • They encapsulate data with code to work on that data.
 * • Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
 *
 * Syntax - Defining a class
 * class ClassName {}
 *
 * Syntax - Creating an object of Class
 * let objName = new ClassName();
 *
 * • NOTE: Class names should be in pascal case.
 */

class Person {}
let p = new Person();
console.log(typeof Person); // output: function

// • Classes are similar to functions but they are not hoisted i.e.
let p2 = new Person2(); // ReferenceError: Cannot access 'Person2' before initialization
class Person2 {}

// • Adding a method to the class is same as adding a method to the prototype object.
class Employee {
  showId() {}
}
let e = new Employee();
console.log(e.showId === Employee.prototype.showId);

/**
 * 01. CLASS BODY & METHODS
 *
 * • Class body - The part of class inside {...}
 * • In ES2015 Class body can contain only methods and not properties.
 */

class Person {
  // • Constructor method: Used for creating and initialising objects of class.
  // • For every class we can have only one constructor function.
  // • It is called during object creation.
  constructor(name) {
    this.name = name;
    console.log("Hello " + this.name + " (constructor)");
  }

  // • Static method: Can be called without instantiating the class.
  // • Can be called directly from class and not the object.
  static staticGreetPerson() {
    console.log("Hello " + this.name + " (static method)");
  }

  // • Prototype method: It can be called by each object.
  greetPerson() {
    console.log("Hello " + this.name + " (method)");
  }
}

let p1 = new Person("Saurabh");
p1.greetPerson();
Person.staticGreetPerson();

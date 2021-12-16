/**
 * 01. CLASS INHERITANCE
 *
 * • Class inheritance is possible with the `extends` keyword.
 * • `extends` keyword is used to create a new class that inherits from the parent class.
 */

class Person {
  constructor() {
    console.log("Constructor function invoked");
  }
}

class Employee extends Person {}
let e = new Employee();
/**
 * • Here the constructor function gets invoked when the employee object is created.
 * • This happens due to inheritance of parents function by child class.
 * • This also holds true for parameterised constructors.
 */

class Vehicle {
  constructor(model) {
    console.log("Constructor function invoked for " + model);
  }
}

class Car extends Vehicle {}
let SUV = new Car("Fortuner\n");

/**
 * • If there is no constructor in the derived class then the constructor from the parent class gets invoked.
 * • `super` keyword is used to call the constructor of parent class.
 */

class Library {
  constructor(bookName) {
    console.log("Library constructor:" + bookName);
  }
  getPrice() {
    return 100;
  }
}

class Book extends Library {
  constructor(bookName) {
    super(bookName);
    console.log("Book constructor:" + bookName);
  }
  // getPrice() {
  //   return 250;
  // }
  getPrice() {
    return super.getPrice();
  }
}

let b = new Book(" Rich dad Poor dad");
console.log("Price of book Rs", b.getPrice());

/**
 * • We have access to parent class methods using the derived class.
 * • Here we can call the getPrice method from the parent class, even though the method is not there in derived class.
 *
 * • If the derived class has the method, then the derived class method will be called.
 * • If we still want to access the parent class method, we can use the super keyword.
 *
 * • Use of `super` keyword -
 *  - To get access to methods of parent class.
 *  - To invoke the constructor of the parent class. (so that rest of the code functions properly)
 */

/**
 * 01. INTERFACES
 *
 * • Interfaces are the most flexible way of describing types in TypeScript.
 * • Syntax: interface interfaceName { property1: type, property2: type... }
 */

// • Declaring an interface
interface Person {
  fName: string;
  lName: string;
  age?: number; // optional property
}

// • If any of the properties is missing in the object, TS will show an error.
let employee1: Person = {
  fName: "Saurabh",
  lName: "Das",
  age: 22,
};

// • To make any property optional, we must add ? after propertyName in interface.
let employee2: Person = {
  fName: "Subhrajit",
  lName: "Ghose",
};

// RUN CODE USING: npx tsx 36.\ interfaces.ts

/** 01. MODULE E (EXPORTING CLASSES & FUNCTIONS) */

// • Use export keyword before the function or class to export it.
export function greet(message) {
  console.log(message);
}

export class GreetMessage {
  constructor() {
    console.log("constructor called");
  }

  greet() {
    console.log("greet method called");
  }
}

/** 01. CLASS CONSTRUCTORS */

// • Constructors written using TypeScript (both syntaxes are equivalent).
class Person {
  public fName: string;
  public lName: string;
  constructor (fName: string, lName: string) {
    this.fName = fName;
    this.lName = lName;
  }
}

class Person2 {
  constructor (public fName: string, public lName: string) {
    this.fName = fName;
    this.lName = lName;
  }
}

// RUN CODE USING: npx tsx 35.\ class\ constructors.ts

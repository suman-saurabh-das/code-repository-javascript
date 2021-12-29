/**
 * 01. ENUMERATION
 * 
 * • Enumerations are simply used to give friendly names to numeric values.
 * • It is also used to create a list of values (custom type) that a variable can hold.
 */

// • Declaring a enum type

// • This will assign a numeric value of 0, 1 & 2 to Black, Brown & Blue.
enum EyeColor { Black, Brown, Blue };
// • We can also specifically assign the numeric values.
enum EyeColor2 { Green = 5, Grey = 10 };

var myEyeColor = EyeColor.Brown;
console.log("Index of enum:", myEyeColor); // 1
console.log("Value of enum:", EyeColor[myEyeColor]); // Brown

// RUN CODE USING: npx tsx 33.\ enumeration.ts

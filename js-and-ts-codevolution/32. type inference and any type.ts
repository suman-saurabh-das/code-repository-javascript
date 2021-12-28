/**
 * 01. TYPE INFERENCE
 *
 * • TypeScript automatically determines the type of a variable, function return value, or expression based on its assigned value and usage context.
 * • If we try to assign a string (or any type of value other than number) value to a variable of type number, TypeScript throws an error.
 */

// • Type inference helps us identify mistakes when writing code.
var employeeId = 13141190;
// employeeId = "13141190"; // ERROR: Type 'string' is not assignable to type 'number'.

// • However, type inference is not always reliable.
// • Because here the result of 20 + "21" will be string & it will be assigned to sum.
var sum = 20 + "21";
console.log(sum, typeof sum);

/**
 * 02. ANY TYPE
 *
 * • `any` is a datatype, there is no compile type checking when using `any`.
 * • It is the base type for all primitive types.
 * • A variable declared using `any` can hold number, string, boolean, null or undefined.
 * • We can use it when we do not know what value a variable will hold.
 */
var info: any;
info = 13141190;
info = "Suman Saurabh Das";
info = true;

// RUN CODE USING: npx tsx 32.\ type\ inference\ and\ any\ type.ts

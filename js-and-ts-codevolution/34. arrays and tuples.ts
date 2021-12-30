/**
 * 01. ARRAYS & TUPLES
 *
 * • Arrays in TS work the same way as in JS, but we need to declare the types.
 * • Tuples are special arrays that let us specify the type that an array can contain.
 */

let fruitsArray1: string[] = ["Apple", "Banana", "Orange"];
let fruitsArray2: Array<string> = ["Mango", "Strawberry", "Plum"];

let anyArray: any[] = [10, "20", 30, "40"];

let stringAndNumberAndTuple: [string, number] = ["Number of fruits", 50];
console.log(stringAndNumberAndTuple[0], stringAndNumberAndTuple[1]);

// RUN CODE USING: npx tsx 34.\ arrays\ and\ tuples.ts

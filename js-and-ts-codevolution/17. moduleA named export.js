/** 01. MODULE A (EXPORTING VARIABLES) */

// • If we want to export variables fName & lName so that it can be used in moduleB.js, we will have to use the export keyword.
export let fName = "Saurabh";
export let lName = "Das";

// • If we have many variables that needs to be exported, we can also export a list of variables.
let a = "varA",
  b = "varB",
  c = "varC",
  d = "varD";
export { a, b, c, d };

// • Exporting an object
export let obj = {
  fruitName: "Apple",
  color: "red",
};

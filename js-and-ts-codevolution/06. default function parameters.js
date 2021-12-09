// 01. DEFAULT FUNCTION PARAMETERS

let logNum = function (num1 = 10, num2 = 20) {
  console.log("Parameters:", num1, num2);
  console.log("Arguments length:", arguments.length, "\n");
  // Gives count of arguments passed to function (ignores default values).
};
logNum();
logNum(30);
logNum(undefined, 40);
logNum(50, 60);

// • We can use the left hand parameter as an argument for the right hand parameter.
let showSalary = function (sal = 100, bonus = sal * 0.1) {
  console.log("Salary:", sal + bonus);
};
showSalary();
showSalary(200);
showSalary(200, 30);
console.log();

// • We can use variables as assignment to our parameters.
// • we can use function as assignment to our parameters.
let val = 80;
let val2 = () => 100;
let logNum2 = function (num1 = val, num2 = val2()) {
  console.log("Parameters:", num1, num2);
};
logNum2();

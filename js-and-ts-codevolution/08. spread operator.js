/**
 * 01. SPREAD OPERATOR
 * 
 * • Rest : combine || Spread : split
 * • Rest operator: it takes an indefinite number of elements and puts them in an array.
 * • Spread operator: it takes an array and splits it into individual elements (it behaves opposite to rest operator).
 * 
 * • Syntax of spread operator : 
      function myFunc (ele1, ele2, ele3) 
      { 
        // function body
      }
      const arr = [element1, element2, element3]
      myFunc(...arr);
 */
console.log("Using spread operator -");
const displayColors = function (col1, col2, col3) {
  console.log(col1);
  console.log(col2);
  console.log(col3);
};
const colorArray = ["Orange", "Purple", "Brown"];
displayColors(...colorArray);

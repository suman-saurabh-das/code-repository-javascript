/** 01. forEach LOOP */

/**
 * • Iterating over arrays -
 *  - Syntax of forEach: arrayName.forEach(function)
 *  - The function can take index, element and array as parameters.
 */

console.log("Iterating over Array");
let arr = [12, 17, 26, 31, 47, 59];
arr.forEach(printArr);
function printArr(element, index, array) {
  console.log(`arr[${index}] = ${element} `);
}

/**
 * • Iterating over Maps -
 *  - Syntax of forEach: mapName.forEach(function)
 *  - The function takes value, key and mapName (map upon which forEach is called) as parameters.
 */

console.log("\nIterating over Map");
let nameMap = new Map([
  ["firstName", "Saurabh"],
  ["lastName", "Das"],
]);
nameMap.forEach(printMap);

function printMap(value, key, callingMap) {
  process.stdout.write(`${key}: ${value} `);
  console.log(callingMap === nameMap);
}

/**
 * • Iterating over Sets
 *  - Syntax of forEach: setName.forEach(function)
 *  - The function takes value, key and setName (set upon which forEach is called) as parameters.
 *  - NOTE: In case of sets, the key and value are same.
 */

console.log("\nIterating over Set");
let numberSet = new Set([1, 2, 3, 4]);
numberSet.forEach(printSet);

function printSet(value, key, callingSet) {
  process.stdout.write(key + " " + value + " ");
  console.log(callingSet === numberSet);
}

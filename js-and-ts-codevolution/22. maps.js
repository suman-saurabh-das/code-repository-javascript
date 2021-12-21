/**
 * 01. MAP
 *
 * • It is an ordered list of key value pairs.
 * • In map, the type of key & value can be of any type while in object the key must be a string.
 */

// • Creating a new map.
let myMap = new Map();

// • Adding an item to a map: .set(key, value)
myMap.set("firstName", "Saurabh");
myMap.set("age", 24);

// • Retrieving values from a map: .get(key)
console.log("Strings as keys:", myMap.get("firstName"), myMap.get("age"));

// • We can also use objects as key.
let obj1 = {};
let obj2 = {};

myMap.set(obj1, 100);
myMap.set(obj2, 200);
console.log("Objects as keys:", myMap.get(obj1), myMap.get(obj2));

// • We can use .size property to get the number of key-value pairs in the map.
console.log("Size of map:", myMap.size);

// • We can use .has() method to check whether a key is present in our map.
console.log("\nCheck if map has fName:", myMap.has("fName"));
console.log("Check if map has firstName:", myMap.has("firstName"), "\n");

// • We can use .delete() method to delete a key.
myMap.delete(obj2);
console.log("Size of may after deleting a key-value pair:", myMap.size, myMap.has(obj2));

// • We can use .clear() method to remove all the key-value pairs from the map.
myMap.clear();
console.log("Size of may after removing all key-value pairs:", myMap.size);

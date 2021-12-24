/**
 * 01. WEAK MAP
 *
 * • In case of weak maps, the keys can only be objects.
 * • And the object references are weak. i.e. they do not interfere with garbage collection.
 */

let weakMap = new WeakMap();
let obj1 = {};
weakMap.set(obj1, "Hello World");
console.log("weakMap key obj1 has value:", weakMap.get(obj1));

obj1 = null;
console.log("weakMap has key obj1:", weakMap.has(obj1));

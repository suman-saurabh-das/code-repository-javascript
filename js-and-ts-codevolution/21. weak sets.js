/**
 * 01. STRONG SET
 */

let strongSet = new Set();
let key = {};
strongSet.add(key);
console.log("strongSet size:", strongSet.size); // output : 1
key = null;
console.log("strongSet size after updating reference:", strongSet.size); // output : 1

// • Here even though we have set the key to null (reference is pointing to null), we still have the object in our set and we can retrieve it as follows -
key = [...strongSet][0];
console.log("\nValue in strongSet:", key, "\n");

// • Now in order for garbage collection to occur (when we remove the reference) and to prevent memory leaks,  we will have to use weak sets instead of strong set.
// • i.e. in strong sets even if we remove the object, its reference still points to the same object and is not garbage collected. But in case of weak sets, if we remove the reference, the object gets garbage collected.

/**
 * 02. WEAK SETS
 *
 * • weak sets are similar to strong set, but -
 *  - It can store only object references and it cannot store primitive values.
 *  - Object references are weak. (i.e. if the object reference is removed, the weak set allows garbage collection)
 */
let weakSet = new WeakSet();
let key2 = {};
weakSet.add(key2);
console.log("weakSet has key2:", weakSet.has(key2));
key2 = null;
console.log("weakSet has key2:", weakSet.has(key2));

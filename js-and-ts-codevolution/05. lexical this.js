/**
 * 01. LEXICAL THIS
 *
 * • Here if we use function keyword to create our function cb inside setTimeout(), and then use this.id to get the id, we get undefined as the this here tries to find id inside the function cb but doesn't find it.
 * • When we use a function keyword, it creates its own context for this keyword and it does not have the context of the outer function.
 */
const employee1 = {
  id: 1707238,
  logId: function () {
    setTimeout(function cb() {
      console.log("Function definition:", this.id); // returns undefined
    }, 1000);
  },
};
employee1.logId();

/**
 * • Here if we use an arrow function to create our function inside setTimeout(), and then use this.id to get the id, we get the id value from the parent function as the this here tries to find id inside the function scope but doesn't find it, so it takes its value from the parent scope.
 * • When we use an arrow function, it does not create its own context and the this here refers to its parents context
 */
const employee2 = {
  id: 1707238,
  logId: function () {
    setTimeout(() => {
      console.log("Arrow function:", this.id); // returns 1707238
    }, 1000);
  },
};
employee2.logId();

/**
 * Benefits of arrow function -
 *
 * • Reduces length of code.
 * • We can access parent functions context inside the child function.
 */

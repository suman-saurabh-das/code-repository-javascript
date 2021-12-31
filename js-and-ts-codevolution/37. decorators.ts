/**
 * 01. DECORATORS
 * 
 * • It is a special kind of declaration that can be attached to classes, methods or properties.
 * • Decorators get evaluated to a function that can be called at runtime.
 */

function Logger(constructor: Function) {
  console.log("Class created:", constructor.name);
}

@Logger
class Employee {}

// RUN CODE USING: npx tsx 37.\ decorators.ts

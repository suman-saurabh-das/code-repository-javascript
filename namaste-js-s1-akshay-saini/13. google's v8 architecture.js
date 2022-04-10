/**
 * 01. JAVASCRIPT RUNTIME ENVIRONMENT (JRE): contains all things required to run the JS code.
 *
 * • It has a JS engine, Web-API's, event loop, callback queue, micro-task queue.
 * • Node.js is used to run JS code outside of our browser. It is an open source JRE.
 *
 * • JS engine converts the human readable high level language into machine understandable low level language.
 * • JS Engine takes code -> Parsing -> Compilation -> Execution
 *
 * • Parsing: Code is broken down into tokens. E.g. let a = 10
 * • Syntax parser: Takes the code and converts into an AST (Abstract Syntax Tree)
 * • AST is passed to compilation phase.
 *
 * 02. COMPILATION: JS has just in time compilation (JIT)
 *
 * • Interpreter: takes the code and starts executing it line by line. Code execution is faster.
 * • Compiler: whole code is compiled (optimised version of code is generated) before code execution. Code is more efficient.
 *
 * • JS is neither purely interpreted, nor purely compiled language.
 * • JS engines can use interpreter and compiler together and that makes it a JIT compiled language.
 *
 * • AST code that we get after parsing is converted to byte code by the interpreter.
 * • At the same time the compiler optimizes the code. It is a multi step process.
 * • Byte code is then passed to execution phase.
 *
 * 03. EXECUTION
 *
 * • Ahead of time (AOT) compilation: Some JS engines use this.
 * • The compiler takes a piece of code and tries to optimize it as much as it can.
 * • It also produces the byte code, which goes to execution phase.
 *
 * • JS code execution requires memory heap and the call stack.
 * • Memory heap: Place where all the memory is stored. It is constantly in sync with the call stack, garbage collector, etc. All variables and functions are assigned memory here.
 *
 * 04. GARBAGE COLLECTOR
 * 
 * • Tries to free up space (memory) whenever a variable or function is not in use.
 * • It uses the Mark & Sweep algorithm.
 * • There are many forms of optimizations that a compiler does for the code.
 * • E.g. In-lining, Inline caching, copy elision.
 *
 * 05. V8 ENGINE
 *
 * • Interpreter called ignition.
 * • Compiler called turbo fan (optimising compiler).
 */

/**
 * 01. IN-LINING: Replacing a function call with the actual function body to avoid call overhead.
 *
 * • Function calls cost: Stack setup, Argument passing, Return handling
 * • Inlining removes this overhead → faster execution.
 * • JS engines inline when: function is small, called frequently, has stable types.
 *
 * 02. INLINE CACHING (IC): Inline caching speeds up property access and method calls.
 *
 * • JS is dynamically typed, so this is slow: obj.x
 * • Because engine must: Check object shape, Find property location, Load value
 * • Inline caching remembers where the property was found last time.
 *
 * 03. COPY ELISION: means avoid creating unnecessary objects & memory copies.
 *
 * • JS engines analyze if an object escapes the function scope.
 * • If it doesn’t → object creation is skipped entirely.
 */

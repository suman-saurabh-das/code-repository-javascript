/**
 * 01. TEMPLATE LITERALS
 *
 * • Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs called tagged templates.
 */
let uName = "Saurabh";
let oldGreet = "Welcome " + uName + ", hope you are having fun learning JS";
console.log(oldGreet);

/**
 * • To use a variable, we can use a ${varName}
 * • We can use 'single' and "double" quotes inside template literals.
 * • String templates allow multi line strings.
 * • Spaces are significant in case of template literals.
 */
let newGreet = `\nWelcome ${uName}, hope you are "having fun" learning 'JS'`;

let para = `this is a para
    it contains multiple lines also
        here white spaces are taken as it is.
`;
console.log(newGreet);
console.log(para);

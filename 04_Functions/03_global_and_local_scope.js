// Global and local scope in JavaScript

/*
Scope refers to the availability of variables and functions in certain parts of the code.

In JavaScript, a variable has two types of scope:

Global Scope - A variable declared at the top of a program or outside of a function is considered a
global scope variable.

*/
// program to show the change in global variable
var message = 'Hi';
function say() {
    var message = 'Hello';
    console.log(message); // Hello
}
say();
console.log(message); // Hi


/*
Local Scope - A variable can also have a local scope, i.e it can only be accessed within a function.
*/

function say(message) {
    if(!message) {
        let greeting = 'Hello'; // block scope
        console.log(greeting);
    }
    // say it again ?
    console.log(greeting); // ReferenceError
}
say();
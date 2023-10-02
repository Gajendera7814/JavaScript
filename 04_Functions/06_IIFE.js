// Immediately Invoked Function Expressions IIFE in JS.

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon 
// as it is defined. 

// why we use IIFE ?
// By placing functions and variables inside an IIFE, you can avoid polluting them to the global object.


/*
syntax-

(function(){
    //...
})();

*/


// Normal way
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));


// By using IIFE
(function add(a, b) {
    // named IIFE
    console.log(a + b); // 30
})(10, 20);


// Another way
// By using IIFE
var result = (function add(a, b) {
    return a + b;
})(10, 20);
console.log(result); // 30
/*
Falsy values:-

Falsy values are values that resolve to the Boolean false.

In JavaScript, we have 6 falsy values:

1. false
2. 0 (zero) or -0, BinInt 0n
3. ‘’ or “” (empty string)
4. null
5. undefined
6. NaN

All these return false when they are evaluated.
*/

/*
Truthy values:-

1. "0"
2. "false"
3. " "
4. []
5. {}
6. function(){}

*/

const userEmail = [];
if (userEmail.length === 0) {
  console.log("Array is empty"); // Array is empty
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty"); // Object is empty
}

false == 0; // <-- true

false == ""; // <-- true

0 == ""; // <-- true

var string = ""; // <-- falsy

var filledString = "some string in here"; // <-- truthy

var zero = 0; // <-- falsy

var numberGreaterThanZero; // <-- truthy

var emptyArray = []; // <-- truthy, we'll explore more about this next

var emptyObject = {}; // <-- truthy

if ([] == false)
  if ([])
    // <-- truthy, will run code in if-block

    if ([] == true)
      // <-- truthy, will also run code in if-block

      if (![])
        // <-- falsy, will NOT run code in if-block

        if (!variable) {
          // <-- falsy, will also NOT run code in if-block
          // Important:-
          // When the variable has a falsy value the condition is true.
        }

// bool.js
if (false) {
  console.log("yes");
}

// bool.js
if (0) {
  console.log("yes");
} else {
  console.log("no"); // no
}

// bool.js
if ("") {
  console.log("yes");
} else {
  console.log("no"); // no
}

// bool.js
let variable = null;

if (variable) {
  console.log("yes, initialzed");
} else {
  console.log("no, not yet"); // no, not yet
}

let undefVar;

if (undefVar) {
  console.log("yes, initialzed");
} else {
  console.log("no, not yet");
}
// undefined

let nanVar = 9 / "str"; // NaN
if (nanVar) {
  console.log("yes");
} else {
  console.log("no"); // no
}



// Nullish coalescing operator (??) : null undefined

let val1;

val1 = 5 ?? 10;
console.log(val1); // 5

val1 = null ?? 10
console.log(val1); // 10

val1 = undefined ?? 15
console.log(val1); // 15


val1 = null ?? 10 ?? 15
console.log(val1); // 10


// Terniary operator
// condition ? true :false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
// more than 80
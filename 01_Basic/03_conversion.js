let score = 33
console.log(typeof score); // number
console.log(typeof(score)); // number

let valueNumber = Number(score);
console.log(typeof valueNumber); // number
console.log(valueNumber); // 33


let scores = "33abc"
console.log(typeof scores); // string
console.log(typeof(scores)); // string

let valueNumbers = Number(scores);
console.log(typeof valueNumbers); // number
console.log(valueNumbers); // NaN


/*
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

/*
1 => true; 0 => false
"" => false
"akash" => true
*/

let someNumber = 35;
let strNumber = String(someNumber);
console.log(strNumber); // 35
console.log(typeof strNumber); // string


//******************* Operations ************************/

let value = 3;
let newValue = -value
console.log(newValue);  // -3

let str1 = "hello";
let str2 = " welcome"

let str3 = str1 + str2;
console.log(str3) // hello welcome

console.log(str1 - str2); // NaN

console.log("1" + 2); // 12

console.log(1 + "2"); // 12

console.log("1" + 2 + 2); // 122

console.log(1 + 2 + "5"); // 35

console.log(1 + "2" + 3); // 123

console.log(true); // true
console.log(+true); // 1

console.log("2" + 2); // true
console.log("2" === 2); // false

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(typeof(null)); // object 
console.log(typeof(undefined)); // undefined

console.log([] == []); // false
console.log(typeof([])); // object

let a = [];
let b = a;
console.log(a == b); // true
console.log(a === b); // true


// Postfix increment - first assign then increment
let x = 3;
const y = x++;
console.log(x, y); // 4, 3


// Prefix increment - first increment then assign
let c = 3;
const d = ++c;
console.log(c, d); // 4, 4


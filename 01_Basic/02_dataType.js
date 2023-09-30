"use strict"; // treate all JS code as newer version

// alert(3 + 3) // we are using nodejs, not browser.


// Primitive data Types:-
/*
There are 7 Primitive data Types:-

String => ""
Number => 2 to poer 53
Boolean => true/false
Null => standalone value
Undefined
Symbol => unique
BigInt

*/

// Non Primitive Data Types:-
/*
Array
Objects
Functions
*/

// Object
console.log(typeof(null)); // object

console.log(typeof(undefined)) // undefined


const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId); // false
console.log(id === anotherId); // false

// Array:-
const heros = ["saktiman", "nagraj", "doga"];

// Objects:-
let myObj = {
    name:"akash",
    age: 23
}

// Functios:-
const myunction = () =>{
    console.log("hello")
}

// Note: return type of non-primitive data type is object.


/*
Return type of variables in JavaScript

1) Primitive Datatypes
       Number = number
       String  = string
       Boolean  = boolean
       null  = object
       undefined  =  undefined
       Symbol  =  symbol
       BigInt  =  bigint

2) Non-primitive Datatypes
       Arrays  =  object
       Function  =  function
       Object  =  object
*/       


// In Stack Memory( Only Primitive data type store) and Heap memory(Non-Primitive data type)
 
let name = "Gajendera" // In stack memory
let anotherName = name;
anotherName = "akash";

console.log(anotherName);
console.log(name);

let userOne = {    // Heap Memory
    name: "Rohit",
    age: 23
}

let userTwo = userOne
console.log(userTwo.name);
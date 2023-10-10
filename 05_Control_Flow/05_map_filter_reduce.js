/* 
What is map() method ?

The map() method is used for creating a new array from existing one by applying a function to each 
one of the element of the first array.

map() creates a new array from calling a function for every array element.

map() does not execute the function for empty elements.

map() does not change the original array.

The map() method creates a new array with the results of calling a function for every array element.

Returns a new array with elements as the return values from the callback function for each element.
*/

const arr = [1, 2, 3, 4];
const addThree = arr.map((num, index, arr) => {
return num * 3 + index;
});
console.log(addThree);

// Output: [3, 7, 11, 15]

// Polyfill for map() method:-
Array.prototype.myMap = function (cb) {
let temp = [];
for (let i = 0; i < this.length; i++) {
temp.push(cb(this[i], i, this));
}
return temp;
};
const numbers = [1, 2, 3, 4];
const multiplyThree = numbers.myMap((num, index, arr) => {
return num * 3 + index;
});
console.log(multiplyThree);
// Output: [ 3, 7, 11, 15 ]


/*
What is filter() method ?

The filter() method takes each element in an array and it apply conditional statement against it. 
If the condition returns the element gets pushed into the output array. If the condition returns the
element does not pushed into the output array.

The filter() method creates a new array filled with elements that pass a test provided by a function.

The callback function can take in the following parameters:

*/

const arr1 = [1, 2, 3, 4];
const newArr = arr1.filter((num) => {
return num > 2;
});
console.log(newArr);

// Output: [3, 4]

// Polyfill for filter() method:-
Array.prototype.myFilter = function (cb) {
let temp = [];
for (let i = 0; i < this.length; i++) {
if (cb(this[i], i, this)) {
temp.push(this[i]);
}
}
return temp;
};
const num = [1, 2, 3, 4];
const moreThanTwo = num.myFilter((num) => {
return num > 2;
})
console.log(moreThanTwo);


/* 
What is reduce() method ?

The reduce method executes a reducer function for array element.

The reduce() method returns a single value.

The reduce() method executes a reducer function on each element of the array and returns a 
single output value.

It takes two parameters :-
1. Callback function
2. Initial value
Callback function contains: -
*/

const arr2 = [1, 2, 3, 4];
const sumValue = arr2.reduce((accu, curr, i, arr) => {
return accu + curr;
}, 0);
console.log(sumValue);
// Output: 10

// Polyfill for filter() method
Array.prototype.myReduce = function (cb, initialValue) {
var accumulator = initialValue;
for (let i = 0; i < this.length; i++) {
accumulator = accumulator ?
cb(accumulator, this[i], i, this) : this[i]
}
return accumulator;
};
const number = [1, 2, 3, 4];
const sumNum = number.myReduce((accu, curr, i, arr) => {
return accu + curr;
}, 0);
console.log(sumNum);
// Output: 10

// Example based on map(), filter() and reduce() method.

let students = [
{ name: "Akash", rollNumber: 20, marks: 80 },
{ name: "Rajan", rollNumber: 28, marks: 69 },
{ name: "Harsh", rollNumber: 12, marks: 35 },
{ name: "Atul", rollNumber: 29, marks: 55 }
]
// By using for-loop
let useNames = [];
for (let i = 0; i < students.length; i++) {
useNames.push(students[i].name.toUpperCase());
}
console.log(useNames);

// By using map() method
const names = students.map((stu) => stu.name.toUpperCase());
console.log(names)
// Output: [ 'AKASH', 'RAJAN', 'HARSH', 'ATUL' ]
// Return only details of those who scored more than 60 marks.

const marks = students.filter((mrk) => mrk.marks > 60);
console.log(marks);

// More than 60 marks and rollNumber greater than 15.
const rollAndMarks = students.filter((res) => res.marks > 60 && res.rollNumber > 15);
console.log(rollAndMarks);

// Sum of marks of all students.
const sum = students.reduce((accu,curr) => accu + curr.marks,0);
console.log(sum)
// Output: 264

// Return only names of students who scored more than 60.
const studentName = students.filter((stu) => stu.marks > 60).map((stuName) => stuName.name);
console.log(studentName);
// Output: [ 'Akash', 'Rajan' ]


// Return total marks for students with marks greater than 60 after 20 marks have been added to
//  those who scored less than 60.

const totalMarks = students.map((stu) => {
 if (stu.marks < 60) {
stu.marks += 20
 }
 return stu
}).filter((stuMark) => stuMark.marks > 60).
reduce((accu, curr) => accu + curr.marks, 0);
console.log(totalMarks)
// Output: 224
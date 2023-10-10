// for-loop

for(let i = 1; i <= 10; i++){
    console.log(i);
}


// break
for (let i = 1; i <= 10; i++) {
    if(i == 5){
        console.log("Detected 5");
        break;
    }
    console.log(i); 
}


// continue
for (let i = 1; i <= 10; i++) {
    if(i == 5){
        console.log("Detected 5");
        continue;
    }
    console.log(i);
}


// for-of loop
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num); // 1, 2, 3, 4, 5
}

// for-in loop
const array = [1, 2, 3, 4, 5];
for (const num in array) {
    console.log(num); // print index position 0, 1, 2, 3, 4
}

const myObj = {
    JS: "JavaScript",
    py: "Python",
    cpp: "C++",
    swift: "swift by apple"
}

for (const key in myObj) {
    console.log(key);
}
/* output:- key is print
JS
py
cpp
swift
*/


const myObj2 = {
    JS: "JavaScript",
    py: "Python",
    cpp: "C++",
    swift: "swift by apple"
}

for (const key in myObj2) {
    console.log(myObj2[key]);
}

/* output:- value print
JavaScript
Python
C++
swift by apple
*/


// forEach() method
const coding = ["JavaScript", "Python", "C++", "swift by apple"];

coding.forEach((item, index) =>{
    console.log(item, index);
});

/* output:-
JavaScript
Python
C++
swift by apple
*/

const code = [
    {
        language: "JavaScript",
        fileName: "Python"
    },
    {
        language: "c++",
        fileName: "java"
    }
];
code.forEach((item) =>{
    console.log(item.language);
});

/* Output:- 
JavaScript
c++
*/
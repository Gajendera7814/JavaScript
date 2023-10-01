const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ['saktiman', 'spiderman'];

console.log(myArr[2]); // 2
console.log(myHeros); // [ 'saktiman', 'spiderman' ]

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2); // [ 1, 2, 3, 4, 5 ]

// Array Methods:-
myArr.push(12);
console.log(myArr); // [0, 1, 2, 3, 4, 5, 12]

myArr.pop();
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

myArr.unshift(19);
console.log(myArr); // [19, 0, 1, 2, 3, 4, 5]

myArr.shift();
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]


console.log(myArr.includes(5)); // true
console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join();
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr); // 0,1,2,3,4,5
console.log(typeof(newArr)); // string

// slice, splice
console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3); 
console.log(myn1); // [1, 2]
console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3); 
console.log("C ", myArr); // C  [ 0, 4, 5 ]
console.log(myn2); // [1, 2, 3]
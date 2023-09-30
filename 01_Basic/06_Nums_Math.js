/*========================== Number =========================*/ 
const score = 100;
console.log(score); // 100

const balance = new Number(100);
console.log(balance);// [Number: 100]

console.log(balance.toString().length); // 3

console.log(balance.toFixed(2)); // 100.00

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); // 23.9

const otherNumber2 = 123.8966;
console.log(otherNumber2.toPrecision(3)); // 124

const otherNumber3 = 1234.8966;
console.log(otherNumber3.toPrecision(3)); // 1.23e+3

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

/*========================== Math =========================*/ 

// abs(absolue) - To change -ve to +ve
console.log(Math.abs(-4)); // 4

console.log(Math.round(5.6)); // 6

console.log(Math.ceil(4.3)); // 5

console.log(Math.floor(4.6)); // 4

console.log(Math.min(4, 5, 2, 8)); // 2

console.log(Math.max(9, 2, 6, 4, 10)); // 10

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

// Trick
const min = 10;
const max = 20;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);



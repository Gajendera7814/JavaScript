// Dates
let myDate = new Date();
console.log(myDate.toString()); // Sun Oct 01 2023 01:03:54 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // Sun Oct 01 2023

console.log(myDate.toLocaleString()); // 1/10/2023, 1:05:30 am

console.log(typeof(myDate)); // object

// month start by 0(zero)
let myCreatedDate = new Date(2023, 8, 23);
console.log(myCreatedDate.toDateString()); // Sat Sep 23 2023

let myCreatedDate2 = new Date(2023, 8, 23, 1, 15);
console.log(myCreatedDate2.toLocaleString()); // 23/9/2023, 1:15:00 am

let myCreatedDate3 = new Date("2023-09-23");
console.log(myCreatedDate3.toLocaleString()); // 23/9/2023, 5:30:00 am

let myCreatedDate4 = new Date("10-01-2023");
console.log(myCreatedDate4.toLocaleString()); // 1/10/2023, 12:00:00 am


let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate); // 2023-09-30T20:03:26.335Z
console.log(newDate.getMonth()); // 9
console.log(newDate.getHours()); // 1
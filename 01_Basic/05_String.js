const name = "Gajendera";
const repoCount = 30;

console.log(name + repoCount + "value"); // Gajendera30value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

console.log(typeof(name)); // string

const getName = new String('akaSH');

console.log(getName[0]); // a

console.log(getName.__proto__); // {}

console.log(getName.length); // 5

console.log(getName.toLocaleLowerCase()); // akash

console.log(getName.charAt(1)); // to find character 

console.log(getName.indexOf('k')); // to find index position

/*=================================================================================================*/

let userName = new String("Akash-verma");

// substring() method
const newString = userName.substring(0, 4);
console.log(newString); // Akas

// slice() method
const anotherString = userName.slice(-11, 8);
console.log("++++",anotherString); //Akash-ve

// trim() method - to remove space between start and end.
const newString2 = "  hello ";
console.log(newString2.trim());

// replace method
const url = "https://www.google.com/";
console.log(url.replace('g', '-')); // search first g and also remove by -
// https://www.-oogle.com/

console.log(url.includes('o')); // true

// convert string to array
console.log(userName.split(" ")); // [ 'Akash-verma' ]
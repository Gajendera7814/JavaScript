const marvel_heros = ['Thor', 'Ironman', 'Spiderman'];
const dc_heros = ['superman', 'flash', 'batman'];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); // [ 'Thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]


// spread operator
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros); // [ 'Thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]


const newArray = [1,2, 3, [4, 5, 6], 7, [6, 7, [8, 9]]];
const realArray = newArray.flat(Infinity);
console.log(realArray); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9]


console.log(Array.isArray("Gajendera")); // false

console.log(Array.from("Gajendera")); // ['G', 'a', 'j', 'e', 'n', 'd', 'e', 'r', 'a']

console.log(Array.from({name: "Gajendera"})); // []

let score1 = 100;
let score2 = 200;
let score3 = 200;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
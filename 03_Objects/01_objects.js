// object literals

const quqlification = Symbol("hii");
const jsUser = {
    name: "Gajendera",
    "full name": "akash verma",
    age: 23,
    [quqlification]: "B.Tech",
    location: "Gurugram",
    email: "gajenderakumar806@gmail.com",
    isLoggedIn: false,
    lastLogindays: ["monday", "friday"]
};

console.log(jsUser.name); // Gajendera
console.log(jsUser["email"]); // gajenderakumar806@gmail.com
console.log(jsUser[quqlification]); // B.Tech

jsUser.email = "gajenderrock242@gmail.com";
// Object.freeze(jsUser);

jsUser.email = "another@gmail.com";
console.log(jsUser);
/*
{
  name: 'Gajendera',
  'full name': 'akash verma',
  age: 23,
  location: 'Gurugram',
  email: 'gajenderrock242@gmail.com',
  isLoggedIn: false,
  lastLogindays: [ 'monday', 'friday' ],
  [Symbol(hii)]: 'B.Tech'
}
*/

jsUser.greeting = function(){
    console.log("hello JS user"); // hello JS user
}
// console.log(jsUser.greeting); // undefined
jsUser.greeting();

jsUser.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`); // hello JS user, Gajendera
}
jsUser.greeting2();

// THIS and arrow function in JS.

// This keyword refers current context.
const user = {
    username: "akash",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // akash, welcome to website
        console.log(this); // This keyword refers current context.
        /* 
        akash, welcome to website
        {
          username: 'akash',
          price: 99,
          welcomeMessage: [Function: welcomeMessage]  
        }
        Gajendera, welcome to website
        {
          username: 'Gajendera',
          price: 99,
          welcomeMessage: [Function: welcomeMessage]
        }
        */
    }
}
user.welcomeMessage();

user.username = "Gajendera"; // Gajendera, welcome to website
user.welcomeMessage();

console.log(this); // {}


function greetFun(){
    let username = "alok kumar";
    console.log(this);
    console.log(this.username); // undefined
}
greetFun();


const greetFuns = function (){
    let username = "Harsh kumar";
    console.log(this.username); // undefined
}
greetFuns();


// Arrow function
const greetFunction = () =>{
    let username = "Harsh kumar";
    console.log(this); // {}
    console.log(this.username); // undefined
}
greetFuns();


// explicit return use curly bracket
const addTwo = (num1, num2) =>{
    return num1 + num2
}
console.log(addTwo(3, 6)); // 9


// implicit return use parenthesis
const addTwos = (num1, num2) => ( num1 + num2 );
console.log(addTwos(3, 6)); // 9

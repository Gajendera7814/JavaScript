// Functions and parameter.

function sayMyName(){
    console.log("hello")
}
sayMyName(); // hello


function addTwoNumber(number1, number2){ // parameters
    return number1 + number2
}
let sum = addTwoNumber(3, 6); // arguments
console.log(`sum of two number is ${sum}`); // sum of two number is 9


function loginUserMessage(userName){
    if(userName === undefined){
        console.log('Please enter a username');
        return;
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage()); // undefined
console.log(loginUserMessage('Gajendera')); // Gajendera just logged in

/*
if(userName === undefined){
    console.log('Please enter a username');
    return;
}

Another Way :- 
if(!userName){
    console.log('Please enter a username');
    return;
}

*/
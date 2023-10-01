// Functions with objects and array.

// By using rest operator
function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(200, 300, 250, 390)); // [ 200, 300, 250, 390 ]


function calculateCartPrices(num1, num2, ...num){
    return num
}
console.log(calculateCartPrices(200, 300, 250, 390)); // [ 250, 390 ]


// How to pass object in function
const user = {
    userName: "Gajendera kumar",
    age: 24
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and age is ${anyObject.age}.`) // Username is Gajendera kumar and age is 24.
}
handleObject(user);


// How to pass array in function
const myNewArraya = [12, 13, 18, 19];

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArraya)); // 13



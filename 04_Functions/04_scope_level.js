// Nested scope

function one(){
    const username = "akash"

    function two(){
        const website = "google"
        console.log(username); // akash
    }
    // console.log(website); // ReferenceError: website is not defined
    two();
}
one();


if(true){
    const username = "harsh"
    if(username === "harsh"){
        const website = "apple"
        console.log(username + " " + website); // harsh apple
    }
    // console.log(website); // ReferenceError: website is not defined
}
// console.log(username); // ReferenceError: username is not defined


//+++++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++//

function addOne(num){
    return num + 1
}
console.log(addOne(5)); // 6

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(7)); // 9
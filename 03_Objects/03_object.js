// Object de-structure and JSON API.

const cource = {
    courceName: "JavaScript",
    price: "999",
    courceInstructor: "hitesh"
}
const {courceName} = cource
console.log(courceName); // JavaScript

// Another way
const {courceName: JS} = cource
console.log(JS) // JavaScript



// const tinderUser = new Object(); // singleton object

const tinderUser = {} // non singleton object
tinderUser.tinderUser = "123abc"
tinderUser.name = "Akash"
tinderUser.isLoggedIn = false

console.log(tinderUser); // { tinderUser: '123abc', name: 'Akash', isLoggedIn: false }


const regularUser = {
    email: "ankur234@gmail.com",
    fullName: {
        userFullName: {
            fName:  "Gajendera",
            lName: "kumar"
        }
    }
}
console.log(regularUser.fullName.userFullName.fName); // Gajendera


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// {} it is target element and obj1, obj2 are source element.
// it is not compulsory.
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Better way
const obj4 = {...obj1, ...obj2};
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users = [
    {
        id: 1,
        email: "akash910@gmail.com"
    },
    {
        id: 2,
        email: "sudhir234@gmail.com"
    },
    {
        id: 3,
        email: "vicky546@gmail.com"
    }
]
console.log(users[1].email); // sudhir234@gmail.com


console.log(tinderUser);

// Important Line
console.log(Object.keys(tinderUser)); // [ 'tinderUser', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser)); // [ '123abc', 'Akash', false ]

console.log(Object.entries(tinderUser)); // [[ 'tinderUser', '123abc' ], [ 'name', 'Akash' ], [ 'isLoggedIn', false ]]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

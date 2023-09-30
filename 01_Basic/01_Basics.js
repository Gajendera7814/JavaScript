// Standerd way to write variable name. 

const accountId = 23;
let accountEmail = "Gajendera@gmail.com";      
var accountPassword = "123456";
city = "Gurugram";
let stateName; 

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/
accountEmail = "Akash123@gmail.com";
accountPassword = "987356";
city = "Nalanda";
console.table([accountId, accountEmail, accountPassword, city]);
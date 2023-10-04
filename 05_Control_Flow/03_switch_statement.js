
//<<<<<<<<<============ switch statement =============>>>>>>>>>>
/*
switch(key){
    case value:
        break;
    
    default:
        break;
}
*/

const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;

  default:
    console.log("Default month");
    break;
}


// In mont is in string
const months = "feb";

switch (months) {
  case "january":
    console.log("january");
    break;
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march");
    break;
  case "april":
    console.log("april");
    break;

  default:
    console.log("Default month");
    break;
}

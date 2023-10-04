/*
JavaScript execution context

Memory are allocated to variables and functions in JS.

-->> Global Execution Context
-->> Function Execution Context
-->> Eval Execution Context

{} => Memory creation phase
   => Execution Phase
*/

let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

/*
Phase-1
1. Global Execution 
2. Memory Phase

In memory creation Phase:- Memory are allocated to variables and function.

variables-
val1 -> undefined
val2 -> undefined

function-
addNum -> undefined
{
    let total = num1 + num2
    return total
}

result1 -> undefined
result2 -> undefined



In Execution Phase:-
val1 -> 10
val2 -> 5

In line 20 --------------------->> Imp
addNum -> create new execution context

1. Im memory creation Phase
val1 -> undefined
val2 -> undefined
total -> undefined

2. In execution phase
num1 -> 10
num2 -> 5
total -> 15 --> return to global execution context.

In line 21 ------------->>>>
1. Im memory creation Phase
val1 -> undefined
val2 -> undefined
total -> undefined

2. In execution phase
num1 -> 10
num2 -> 5
total -> 15 --> return to global execution context.
*/



// call stack or global execution context

// LIFO -> Last in first out
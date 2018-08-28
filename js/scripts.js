//TODO: Takehome Day4

//Dry principle is don't repeat yourself.
//Write as little code as possible. For now we will re write the same lines of code.
// This code violates the dry principle.

let todos = [];
let todo1 = prompt('Hello, what are you doing?', 'Eat tofu');
let todo2 = prompt('Hello, what are you doing?', 'Eat tofu');
let todo3 = prompt('Hello, what are you doing?', 'Eat tofu');

let todoOneArray = [todo1];
let todoOneArray = [todo2];
let todoOneArray = [todo3];

//push is a function that takes arguments. You can give it an infinite amount of arguments.
todos.push(todoOneArray, todoTwoArray, todoThreeArray);

//Let i = 0 index then we will go on to look at index 1 then index 2
//parseInt is used to take a boolean or string and turn it into a number.
for(let i = 0; < todos.length; i++)  {
  let timeframe = prompt(`How long should ${todos[i][0]} take? (Please provide in days)`, '1');
  let transformed = parseInt(timeframe);
  if(!isNaN(transformed) {
    todos[i].push(transformed)
  } else {
    todos[i.push(1)]; //edge casing: catching potential errors for your user.
  }
}

let n = 0;
let max = 0;
while(n < todos.length) {
  if(max < todos[n][1]) {
    max = todos[n][1];
  }
  n++
}


//Example of string interpolation.
let myName = "Maurice";
alert(`Hello, my name is ${Maurice}`)

isNaN(); //Used to evaluate if a value is or is not a number.
//It will return true if it is Not A Number.  If it is a number it will return false.

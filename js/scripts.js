// HOISTING
// JS reads through all your code before executing any of it and looks for all Vars
// Consolg logging Maurice before it is declared wouldn't throw an error though you would expect it to.
// JavaScript hoists the declaration NOT the definition. This happens to keep JavaScript from throwing an error.
console.log(name);
var name = "Maurice";

//Declaring a variable - var name;
//Defining a variable - name ="Maurice";

// Functions in JavaScript

//Anonymous FUNCTIONS
// 1. They cannot refer to themselves
// 2. They are not named
// 3. They only run once
// Arguments become variables in functions only.
// Functions will not run until you call them.
function(name, age) {
  return `My name is ${name}' and I am ${age} years old`;
}

// Named FUNCTIONS
function getTodos(question) {
  todos.push(prompt(question));
}; //function definition
getTodos("What is the first thing you want t do?"); // Example of a function call site.
// A call site is simply the spot where you call a function.
getTodos("What is the last thing you want to do?");
getTodos("What is the last thing you want to do?")


// After JavaScript goes through and checks for vars it then goes through and checks for functions.
nameThatBand("Acappella");

function nameThatBand(bandName) {  //Function declaration.
  return alert(`${bandName} is overrated`);
};

// Example of a function expression
let sayHello = function() {
  alert("Hello");
};
sayHello();


// A recursive function is basically a loop.
// The difference between a recursive function and a loop is what has the control.

let incrementor = 0;
let sayGoodbye = function() {
  if(incrementor > 5){
    alert("Hello");
    incrementor++;
    sayGoodbye();
  } else {
    return;
  }
}

//Fat Arrow Function - These are usually used in place of anonymous functions.
() => ();  // Pointless way to write this code but this is it's basic form.

() => {
  incrementor++;
  if(incrementor < 5) {
    sayGoodbye();
  }
};

pasta => {  //You don't have to use the parenthesis when you only have one argument.
  alert(`My favorite pasta is ${pasta}!`)
}

// This function converts something to toUpperCase
pasta => (pasta.toUpperCase());

(car, house) => {
  //call an API to save this data...
  return `The returned info is ${data}`;
}


// Things I can't wait to learn... How to query the DOM.
// Query selector example... give me all the html elements that have 'this' class or 'that' class.
// Event listener - Listens for a specific event like a mouse hover etc.. and fires code.
// Callback function - A function that runs when JavaScript tells it to.

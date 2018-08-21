// if (1 === 1) {
//   console.log(!true);
// }

//If One is not equal to 1222 then console.log "I am here"
// if (1 !== 1222) {
//   console.log("I am here");
// }
//! point means...What true is not is false.

// DAY3
// === is Strict Comparison
// == is Loose Comprarison
// ! means Not
// !== Strict Not Compraison
// != Loose Not Comparison

// if (1 !== "1") {
//   console.log("I am a bird");
//   // console.log(!true);
// }

// Else means essentially, if your code doesnt fire do this. It's a safety net to handle errors.
// if (1 === 1) {
//   console.log("I am a bird");
// } else {
//   console.log("The bird died");
// }

//Greater than then log "Three is a good number"
// * The equal sign should always be placed second.
// if (1 > 1) {
//   console.log("Three is a good number");
// } else {
//   console.log("Three is no longer a good number");
// }

//If 1 is greater than or equal to one then... else, log "Three is no longer a good number"
// * The equal sign should always be placed second.
// if (1 >= 1) {
//   console.log("Three is a good number");
// } else {
//   console.log("Three is no longer a good number");
// }

// if (1 < 1) {
//   console.log("One outcome");
// } else {
//   console.log("Other outcome");
// }


// const myNumber = '1';
// if (1 === myNumber) {
//   console.log("Enter Site");
// }

//In this example, we will use == instead of === because we have a non number on the righ side of the equasion.
// const userInput = prompt('Please enter a nunber:');
// if (1 == userInput) {
//   console.log('Enter Site');
// } else {
//   alert('Access Denied')
// }


//DAY3 LOGICAL OPERATORS
// Shift and forward slash gives you the the straight slash which is called a pipe.
// This allows multiple correct user input answers.
// const userInput = prompt('Please enter a number:');
// if (userInput == 1 || userInput == 5 || userInput == 20 ) {
//   console.log('Hello World');
// } else {
//   console.log('In the else');
// }

//Not sure if this one was working.
// const userInput = prompt('Please enter a number');
// if (userInput > 5 && userInput < 10); {
//   console.log('Come and get it!');
// } else {
//   console.log('In the else');
// }


//This section of code is incomplete. But the section after this one will show a more simple way to do this.
// if (userInput > 5) {
//   console.log('Number is greater than five');
// } else if (userInput < 5) {
//   console.log('Number is less than five');
// } else if (userInput == 5) {
//   console.log('User entered a five');
// }
// else {
//   console.log('User did not enter a number');
// }

// Day3 - Switch
// Note** In Java Script, Sunday is the first day of the week.
// const today = new Date().getDay();
// switch (today) {
//   case 0:
//     console.log('Sunday');
//     break;
//   case 1:
//     console.log('Monday');
//     break;
//   case 2:
//     console.log('Tuesday');
//     break;
//   case 3:
//     console.log('Wednesday');
//     break;
//   case 4:
//     console.log('Thursay');
//     break;
//   case 5:
//     console.log('Friday');
//     break;
//   case 6:
//     console.log('Saturday');
//     break;
// }

// Day3 Math
// const addition = 1 + 1;
// const subtraction = 2 - 1;
// const multiplication = 2 * 2;
// const division = 10 / 2;
// const remainder = 11 % 3; //There are no such things as percentages in Java Script.
// console.log(remainder);

//This is doing a series of mathamatical equasions. 
let myNum = 1;
// console.log(myNum++);
// Incement
// myNum++;
// Dedrement
// myNum--;
// myNum = myNum + 3; WRONG WAY
// myNum += 3; CORRECT WAY
myNum += 3;
myNum -= 10;
myNum *= 5;
myNum /= 12;
console.log(myNum);

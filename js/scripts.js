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
//   console.log(!true);
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
// const userInput = prompt('Please enter a number:');
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


//Notes day4
// let myArray = ['Red', 'Blue', 'Green', 'Purple', 'Black', 'Gray', 'White'];
// let red = myArray[0];
// console.log(myArray[1])
// console.log(myArray.length);
// let about = ['Jordan', 22, 'The sky is blue.', true];
// console.log(about);

//Note: It is best to avoid arrays with varying data type. The objects in my array should be related.

//This example shows how to check if something is an array. This can be helpful to create an if case like this: If it is an array, do this but if it's not an array, do something else.
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Array.isArray(nums))
//This next line shows how to push or add something to the end of your array.
// You can use this to push new items to a todo list.
// nums.push(10);
// console.log(nums);

// How to add something to the beginning of your array.
// nums.unshift(0);
// console.log(nums);

// nums.pop removes the last item from your array.
// nums.pop();
// console.log(nums);

// Takes the first item out of an array.
// nums.shift();
// console.log(nums);

// This counts 6 items into the array then deletes everything after it.
// nums.splice(6);
// console.log(nums);

// This removes or splices out a section out of the array. 1st Number determins where to begin.
// The second number determines how many places from the first number you count before splicing the rest of the data.
// nums.splice(1,4);
// console.log(nums);

// Slice unlike the others above, copies and returns/creates a new array.
// This example says copy everything from the 3rd index and on.
// let slice = nums.slice(3);
// console.log(nums);
// console.log(slice);

// Same as slice above exept we begin from the 3rd index and count 4 items out. We copy that info into a new array.
// let slice = nums.slice(3, 4);
// console.log(nums);
// console.log(slice);

// This returns the number/index of an item in your array.
// console.log(myArray.indexOf('Green'));

// This indexOf command would return 'Green' to the console log.
// let color = myArray.indexOf('Green');
// console.log(myArray[color]);

// We add the number 1 so that only this one item will be removed. If I don't add the number, it will splice the entier array.
// let myArray = ['Red', 'Blue', 'Green', 'Purple', 'Black', 'Gray', 'White'];
// let color = myArray.indexOf('Green');
// myArray.splice(color, 1);
// console.log(myArray)

// If you had red in this string multiple times. This lastIndexOf would return the last instance of red.
// let myArray = ['Red', 'Blue', 'Green', 'Purple', 'Black', 'Gray', 'White'];
// let lastIndex = myArray.lastIndexOf('Red');  //This way of doing this isn't used often.
// console.log(myArray)
// console.log(lastIndex)
// console.log(myArray.sort())

// Most popular arrays used are: Push, Pop, Slice and indexOf


// DEFINITIONS: SAME AS THE EXAMPLES ABOVE...
//
// Adds new item to the end of the array
// nums.push(10)
//
// Adds new item to th beginnign of the array
// nums.unshift(0);
//
// Removes the last item at the end of the array
// nums.pop();
//
// Removes the first item in the array
// nums.shift();
//
// Cuts out section of the arrays
// nums.splice(1, 4);
//
// Makes a  copy of the array and then cuts the array
// let slice = nums.slice(3);
//
// Gives the index of an item in the array
// let color = myArray.indexOf('Green');


// DAY4 - LOOPS

// This runs a loop until everything in the perenthesis is no longer true.
// This loop will not return 0 because by the time you are logging it, 0 has already happened... ?
// The ++ here is a logic operator that says...Add 2.
// Console log inside the loop returns a different outcome than outside.
// Console log outside the loop returns a different outcome.
// let num = 0;
// while (num < 10) {
//   num++;
// console.log(num);
// }
// console.log(num);

// With a for loop you have more control than with the while loop.
// While a while loop is true, it will run forever. We can control the stop point for a for loop.
// let num = 0;
// for (let i = 0; i < 10; i++) {
//   console.log(num);
// }

// This will create an infinite loop and crash your browser.
// Because when it gets to 10, the command i-- takes one away and we get stuck in the loop.
// let num = 0;
// for (let i = 0; i < 10; i--) {
//   console.log(num);
// }

// This loop is rarely ever used.
// You can do this same thing with a while loop.
// Difference with this one is, it
// let num = 0;
// do {
//   num++;
//   console.log(num);
// } while (num < 10);

// While something is not true, do something. (While Loop)
// Do something while something is untrue. (Do Loop)

// This returns each entry in the array until the entire length of the array has been checked.
// let myArray = ['Red', 'Blue', 'Green', 'Purple', 'Black', 'Gray', 'White'];
// let num = 0;
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }


// END OF CLASS - GRAND FINALLE - Arrays within Arrays

let myFavoriteMovies = [];
let firstFavorite = ['Fireproof', '1979'];
let secondFavorite = ['Facing The Giants', '1987'];
let thirdFavorite = ['Courageous', '1971'];
myFavoriteMovies.push(firstFavorite, secondFavorite, thirdFavorite);
// console.log(myFavoriteMovies[2][1]);
let movieYears = [];
movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1]);
for (let i = 0; i < myFavoriteMovies.length; i++) {
  movieYears.push(myFavoriteMovies[i][1]); // Here we used push because were adding it to an array.
}
console.log(movieYears);

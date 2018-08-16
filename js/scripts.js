// console.log("Hello World!");

//DAY2 - VARIABLES AND CONSOLE.LOG
//Declare a variable
var myName = "Maurice";
var myAge = 35;
// console.log(myName);
// console.log(myAge);

// ES5 way to log out to the console myName and myAge.
// console.log("Hello, " + myName + "! You are " + myAge + " years old. ");

//ES6 way to log out to the console mName and myAge.
console.log(`Hello, ${myName}! You are ${myAge} years old.`)
//Var isn't being used much. Let and Const are used more often.  We will use let more than we use const.
// const myName = "Maurice";


// DAY2 - DATE
const today = new Date();
let day = today.getDate();
let month = today.getMonth() +1;
// let year = today.getYear();  //the year function counts the amount of years that has passed since 1900.
let year = today.getFullYear(); //this prints the actual year that we are in.
let hour = today.getHours();  //To get the actual time from the 24 hr time, subtract 12.
// console.log(today);
// ES5 way to console.log the date stuff!
// console.log(day, month, year, hour);  //This prints out one month behind because January is a zero month. We have to add 1 to the month for it to be accurate.
// ES6 way to console.log the date stuff!!
console.log(`${month}/${day}/${year}`)

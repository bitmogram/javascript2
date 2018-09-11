// prototypical inheritance - study this concept.

let string = new String('String');

console.log(Object.getPrototypeOf(string));

// Can you explain prototypical inheritance?  Whatever the prototype is will inherit the dna from it's parent.
// This concept is like a child having the dna of their parent.

// JSON - Java Script Object Notation


//How to create a JS object.
// var myObj = {
//   firstName: "Maurice Graham"
// };
// console.log(myObj, myObj.hasOwnProperty('someProp')); // This will check to see if your object has the property 'some prop'
//
// var myObj = {
//   firstName: null,
//   lastName: "Graham"
// };
// console.log(myObj.lastName, myObj["lastName"], myObj.someProp);



// const myObj = {
//   firstName: null,
//   lastName: "Graham",
//   someOtherObj: {
//     somethingElse: "Else"
//   }
// };
//
// console.log(myObj.lastName, myObj['lastName'], myObj.someOtherObj.somethingElse);
//
// // Don't use camel case in CSS. It makes people think its JS code.
// // Do not use ID's in CSS.
//
//
// let string = new String('String'),
// arrObj = new Array(['String', 'SecondString']),
// newObj = new Object({name: "Michael"});


// I AM MISSING SOMETHING IN THIS SECTION!!!!!!! ASK ASK ASK!!!!
// const myObj = {
//   firstName: null,
//   lastName: "Graham",
//   someOtherObject: {
//     somethingElse: "Else"
//   }
// };
// //missed something here....these values are undefind in the console log.
// console.log(string);
// console.log(arrObj);
// console.log(newObj);
//


// const user = {
//   email: "maurice.graham@gmail.com",
//   userName: "root",
//   password: "12345"
// }
//
// console.log(user);
// people hack accounts using brute forse methods.  They guess millions of variations of the numbers and letters on a keyboard.


function User(email, userName, password) {
  this.email = email;
  this.userName = userName;
  this.password = password;
  this.getUsername = function() {
    console.log(this.userName);
  };
  this.isValidUser = function() {
    if(this.email && this.userName && this.password) return true;
    else return false;
  }
  return this;

}


let email = prompt('What is your email address?'),
userName = prompt('What is your username'),
password = prompt('What is your password?');

let newUser = new User(email, userName, password);
newUser.getUsername();

console.log(new User(email, userName, password));

// User(email, userName, password);  // Note: Put these in the same order as the functions above or it will not work as expected.

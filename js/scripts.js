// This part is the declaration (We haven't actually called anything yet.)

function calculateDogYears(age) {
  let parsed = parseInt(age);
  if(!isNaN(parsed)) {
    return age * 7;
  } else {
    let newAnswer = prompt("Come on! I said a NUMBER of years!", "1");
    calculateDogYears(newAnswer);
  }
}

//Now we need to call this code.
// parseInt(); is a function that is written into JavaScript.
//You have to pass information into the () for it to do anything.

parseInt();

"Maurice".toUpperCase();  // Even though we aren't passing in the name Maurice it is still consumed 

//Method automatically consumes or passes in the thing that is left of the period.

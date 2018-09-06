// DAY 8 IN CLASS - FORMS

//Var is loose, let is more specific and const is even more specific.
//research the different cases that they are used. 


// Look up the concept called insert before from day 7. That is the day I missed.
const script = document.querySelector("script");
const body = document.querySelector("body");


function fizzBuzz(count, val1, val2) {
  const val3 = val1 * val2;
  let list = document.createElement("ol");
  for (let i = 1; i <= count; i++) {
    let res = document.createElement("li");
    if(i % val3 == 0) {
      // console.log("fizzBuzz");
      res.textContent = "fizzBuzz";
      list.appendChild(res);
    } else {
      // console.log(i);
      res.textContene = i;
      list.appendChild(res);
    }
  }
  body.insertBefore(list, script);
 }

// fizzBuzz(50, 2, 5);

console.log(fiz)

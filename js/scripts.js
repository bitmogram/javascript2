// $100,000 for doing MEAN stack.
// Mean Stack is: MongoDB, Express, Angular -> client, Node,


// DAY 10 - Timers / localStorage / sessionStorage / strict / life

var timer;
var interval;

function delayAlert(duration) {
  duration = duration * 1000;
  timer = setTimeout(triggerAlert, duration);
}

function triggerAlert() {
  alert("Timer Complete");
}

function cancelAlert() {
  clearTimeout(timer);
}

function intervalAlert(duration) {
  duration = duration * 1000;
  interval = setInterval(triggerAlert, duration);
}

function cancelInterval() {
  clearInterval(interval);
}


document.getElementById("timer-start").addEventListener("click", function () {
  // alert("Timer complete");
  var time = prompt("How long would you like to wait?");
  delayAlert(time)
});

// Cron Jobs - Look up the definition of this.

document.getElementById("cancel-timer").addEventListener("click", function () {
  cancelAlert();
})


document.getElementById("interval-start").addEventListener("click", function () {
  var time = prompt("How often would you like this to occur?");
  intervalAlert(time);
})

document.getElementById("cancel-interval").addEventListener("click", function () {
  cancelInterval();
})

//CODE FOR A CLOCK

function checkTime(i) {
  if (i<10) {i = "0" + i};
  return i;
}

function displayClock() {
  const clock = document.getElementById("clock");

  setInterval(function () {
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    clock.textContent = `${hour}:${min}:${sec}`;
    }, 1000);
}

displayClock();


//LOCAL STORAGE



function storeUser(username) {
  window.localStorage.setItem('user', username);
}

function getUser() {
  window.localStorage.getItem('user');
}

document.getElementById("get-username").addEventListener("click", function () {
  var user = prompt("What is your uername?");
  storeUser(user);
});

document.getElementById("displayUsername").addEventListener("click", function() {
  let user = document.getElementById("currentUser");
  user.textContent = getUser();
});

//THIS IS AN IIFE EXAMPLE.  RESEARCH IT. Wont be using this on a regular basis.

var number = 1;
var getNumber = (function(x) {
  return function() {
    alert(x);
  };
}(number));
number = 2;
getNumber();

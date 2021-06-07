// Set the date we're counting down to
var countDownDate = new Date("Jun 9, 2021 12:00:00").getTime();
var daysE = document.getElementById("days");
var hoursE = document.getElementById("hours");
var minsE = document.getElementById("mins");
var secsE = document.getElementById("secs");

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  days = days.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  hours = hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  minutes = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  seconds = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

  // Display the result in the element with id="demo"
  daysE.innerHTML = days;
  hoursE.innerHTML = hours;
  minsE.innerHTML = minutes;
  secsE.innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "The time is now";
  }
}, 1000);

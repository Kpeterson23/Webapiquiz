// Created variables for everything to work
var timer = document.querySelector(".time");
var startbutton = document.querySelector("#start");
var landingpage = document.querySelector(".landingpage");
var q1page = document.querySelector(".q1page");
var q2page = document.querySelector(".q2page");
var q3page = document.querySelector(".q3page");
var q4page = document.querySelector(".q4page");
var q5page = document.querySelector(".q5page");
var resultspage = document.querySelector(".resultspage");
var displayscore = document.querySelector(".score");
var submitbutton = document.querySelector(".submitbutton");
var highscorepage = document.querySelector(".highscorepage");
var showhspage = document.querySelector(".showhighscores");
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var score3 = document.querySelector("#score3");
var score4 = document.querySelector("#score4");
var score5 = document.querySelector("#score5");
var timeleft = 60;
var score = 0;

//Created all my page arrays.
function clearquestions() {
  q1page.style.display = "none";
  q2page.style.display = "none";
  q3page.style.display = "none";
  q4page.style.display = "none";
  q5page.style.display = "none";
}

clearquestions();
resultspage.style.display = "none";
highscorepage.style.display = "none";
questionpages = [q1page, q2page, q3page, q4page, q5page];

scorelist = [score1, score2, score3, score4, score5];

//Sets timer for application on start
function setTimer() {
  window.timeleft = 60;
  var timerInterval = setInterval(function () {
    timeleft--;
    timer.textContent = "Time: " + timeleft;

    if (timeleft === 0) {
      clearInterval(timerInterval);
      showresults();
    }
  }, 1000);
}

//Starts the quiz when button is pressed.
startbutton.addEventListener("click", function () {
  setTimer();
  landingpage.style.display = "none";
  q1page.style.display = "initial";
  question1();
});
// Question 1
function question1() {
  var wrongans = document.querySelectorAll(".wrongans");
  var correctans = document.querySelectorAll(".correctans");
  wrongans.forEach(function (element) {
    element.addEventListener("click", function () {
      q1page.style.display = "none";
      timeleft = timeleft - 10;
      question2();
    });
  });
  correctans.forEach(function (element) {
    element.addEventListener("click", function () {
      q1page.style.display = "none";
      score++;
      question2();
    });
  });
}

//Question 2.
function question2() {
  var wrongans = document.querySelectorAll(".wrongans2");
  var correctans = document.querySelectorAll(".correctans2");
  q2page.style.display = "initial";
  wrongans.forEach(function (element) {
    element.addEventListener("click", function () {
      q2page.style.display = "none";
      timeleft = timeleft - 10;
      question3();
    });
  });
  correctans.forEach(function (element) {
    element.addEventListener("click", function () {
      q2page.style.display = "none";
      score++;
      question3();
    });
  });
}

//Question 3.
function question3() {
  var wrongans = document.querySelectorAll(".wrongans3");
  var correctans = document.querySelectorAll(".correctans3");
  q3page.style.display = "initial";
  wrongans.forEach(function (element) {
    element.addEventListener("click", function () {
      q3page.style.display = "none";
      timeleft = timeleft - 10;
      question4();
    });
  });
  correctans.forEach(function (element) {
    element.addEventListener("click", function () {
      q3page.style.display = "none";
      score++;
      question4();
    });
  });
}
//Question 4
function question4() {
  var wrongans = document.querySelectorAll(".wrongans4");
  var correctans = document.querySelectorAll(".correctans4");
  q4page.style.display = "initial";
  wrongans.forEach(function (element) {
    element.addEventListener("click", function () {
      q4page.style.display = "none";
      timeleft = timeleft - 10;
      question5();
    });
  });
  correctans.forEach(function (element) {
    element.addEventListener("click", function () {
      q4page.style.display = "none";
      score++;
      question5();
    });
  });
}
//Question 5
function question5() {
  var wrongans = document.querySelectorAll(".wrongans5");
  var correctans = document.querySelectorAll(".correctans5");
  q5page.style.display = "initial";
  wrongans.forEach(function (element) {
    element.addEventListener("click", function () {
      q5page.style.display = "none";
      timeleft = 1;
    });
  });
  correctans.forEach(function (element) {
    element.addEventListener("click", function () {
      q5page.style.display = "none";
      score++;
      timeleft = 1;
    });
  });
}

//Allows user to input their score, and also storing the past 5 quiz scores.
function showresults() {
  clearquestions();
  timeleft = 1;
  resultspage.style.display = "initial";
  displayscore.textContent = score;
  submitbutton.addEventListener("click", function (event) {
    event.preventDefault();
    highscorepage.style.display = "initial";
    var name = document.querySelector("#initials").value;
    var profile = name + "-" + score;
    var allprofiles = JSON.parse(localStorage.getItem("allprofiles") || "[]");
    allprofiles.push(profile);
    localStorage.setItem("allprofiles", JSON.stringify(allprofiles));
    window.allprofiles = allprofiles.reverse();
    console.log(allprofiles);
    for (i in allprofiles) {
      scorelist[i].innerHTML = allprofiles[i];
    }
  });
}

//Displays past 5 quiz scores.
function showhighscores() {
  landingpage.style.display = "none";
  highscorepage.style.display = "initial";
  var name = document.querySelector("#initials").value;
  var profile = "Quiz not taken this session";
  var allprofiles = JSON.parse(localStorage.getItem("allprofiles") || "[]");
  allprofiles.push(profile);
  localStorage.setItem("allprofiles", JSON.stringify(allprofiles));
  window.allprofiles = allprofiles.reverse();
  console.log(allprofiles);
  for (i in allprofiles) {
    scorelist[i].innerHTML = allprofiles[i];
  }
}

//Button that displays previous function
showhspage.addEventListener("click", function () {
  showhighscores();
});

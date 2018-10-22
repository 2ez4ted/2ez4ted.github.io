// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Stylish CLock
// Teddy Yan
// October 15th, 2018
// This is a clock that displays time in an unconventional way
// You may also use its timer function
// Extra for Experts:
// initally I also wrote down a countdown program with the clock but the way
//
let h, m, s;
let input, button;
let dayOrNight = 1; //1 is day 0 is night Also the state variable
let inputStage = 1;//1 means input is turned off and 0 means turned on
let timer;



function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  input = createInput();
}

function draw() {
  h = hour();
  m = minute();
  s = second();
  noFill();

  if (inputStage === 0) {
    background(255);
    giveBox();
  }
  else {
    background(255);
    checkDayOrNight();
    nightModeDetect();
    drawClock();
    if (inputStage === 2) {
      drawTimer();
    }
  }
}

function keyPressed() {
  if (keyCode === 32) {
    if (inputStage === 1) {
      inputStage = 0;
    }
    else if (inputStage === 2) {
      inputStage = 1;
    }
    else if (inputStage === 0) {
      inputStage = 1;
    }
  }
}

function checkDayOrNight() {
  if (h <= 7 || h >= 19) {
    dayOrNight = 0;
  }
  else {
    dayOrNight = 1;
  }
}

function nightModeDetect() {
  if (dayOrNight === 1) {
    background(240);
    stroke(1);
  }
  else {
    background(0);
    stroke(255);
  }

  strokeWeight(1);
  text("Current time:\n" + h + ":" + m + ":" + s, 5, 25);
}

function drawClock() {
  translate(300, 300);

  stroke("purple");
  strokeWeight(5);
  if (h === 0 || h === 12) {
    arc(0, 0, 200, 200, 270);
  }
  else {
    arc(0, 0, 200, 200, 270, 270 + 30 * h);
  } //this if statement eliminates a funny error when s, m or h returns zero

  stroke(100, 255, 255);
  if (m === 0) {
    arc(0, 0, 180, 180, 270);
  }
  else {
    arc(0, 0, 180, 180, 270, 270 + 6 * m);
  }

  stroke(0, 204, 0);
  if (s === 0) {
    arc(0, 0, 160, 160, 270);
  }
  else {
    arc(0, 0, 160, 160, 270, 270 + 6 * s);
  }
}

function giveBox() {
  input.position(5, 75);

  button = createButton("submit");
  button.position(input.x + input.width, 75);
  // button.mousePressed(checkTimer);
  button.mousePressed(alterInputStage);
}

function alterInputStage() {
  inputStage = 2;
}

// function checkTimer() {
//   timer = input.value();
// }

function drawTimer() {
  timer = int(input.value());
  if (frameCount % 60 === 0 && timer > 0) {
    timer --;
    push();
    translate(300, 300);
    stroke('red');
    strokeWeight(5);
    arc(0, 0, 140, 140, 270, 270 + 360/int(timer));
    pop();
  }
  else if (timer === 0) {
    inputStage = 1;
  }
  // for (timer = int(input.value()); frameCount % 60 === 0; timer > 0) {
  //   timer --;


}

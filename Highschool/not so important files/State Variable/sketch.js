// Stylish CLock
// Teddy Yan
// October 15th, 2018
// This is a clock that displays time in an unconventional way
// Extra for Experts:
// I tried to write the timer function and debug it but it didnt work
// so i only used hour, minute and second; drawing arcs and moving cordinates functions to complete this assignment
// as the extra for experts
let h, m, s;
let dayOrNight = 1; //1 is day 0 is night Also the state variable

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  h = hour();
  m = minute();
  s = second();
  noFill();

  checkDayOrNight();
  nightModeDetect();
  drawClock();
}

function checkDayOrNight() {
  if (h <= 7 || h >= 19) {//range of daytime given
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

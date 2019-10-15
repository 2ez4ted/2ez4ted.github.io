

// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let state;
let ltsc; //LastTimeSwitchedColor

const RLD = 3000;
const GLD = 4000;
const YLD = 1000;

function setup() {
  createCanvas(600, 600);
  state = 1;
  ltsc = 0;
}

function draw() {
  background(255);
  drawOutlineOfLights();
  checkForStateChange();
  displayCorrectLight();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function displayRedLight() {
  fill(255, 0, 0);
  ellipse(width/2, height/2 - 65, 50, 50);
}

function displayYellowLight() {
  fill(255, 255, 0);
  ellipse(width/2, height/2, 50, 50);
}

function displayGreenLight() {
  fill(0, 255, 0);
  ellipse(width/2, height/2 + 65, 50, 50);
}

function displayCorrectLight() {
  if (state === 1) {
    displayRedLight();
  }
  else if (state === 2) {
    displayGreenLight();
  }
  else if (state === 3) {
    displayYellowLight();
  }
}

function checkForStateChange() {
  let elapsedTime = millis() - ltsc;
  if (state === 1 && elapsedTime >= RLD) {
    state = 2;
    ltsc = millis();
  }
  else if (state === 2 && elapsedTime  >= GLD) {
    state = 3;
    ltsc = millis();
  }
  else if (state === 3 && elapsedTime >= YLD) {
    state = 1;
    ltsc = millis();
  }
}
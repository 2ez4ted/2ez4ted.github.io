

// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/
let colorU = 255;
let colorM = 255;
let colorB = 255;
let timemark = 0;
let rgbphase = 0;
let Redtime = 4000;
let Yellowtime = 2000;
let Greentime = 4000;





function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  if ((millis() - timemark) <= Redtime) {
    colorU = 'red';
    colorM = 255;
    colorB = 255;
    timemark = millis();

  }
  else if ((millis() - timemark) <= (Redtime + Yellowtime)) {
    colorU = 255;
    colorM = 'yellow';
    colorB = 255;
    timemark = millis();
  }
  else if ((millis() - timemark) <= (Redtime + Yellowtime + Greentime)) {
    colorU = 255;
    colorM = 255;
    colorB = 'green';
    timemark = 0;
  }

}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(colorU);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  fill(colorM);
  ellipse(width/2, height/2, 50, 50); //middle
  fill(colorB);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let dx;
let rectWidth;





function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  dx = 5;
  rectWidth = 200;
}

function draw() {
  background(255, 0, 0)

  //move the rectacgle
  x += dx;

  //check if you hit the wall
  if (x > width - rectWidth || x < 0){
    dx === dx * -1;
  }

  //display rectangle
  fill(0,255,0)
  rect(x,400,rectWidth,150);
}

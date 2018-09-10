// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let dx;






function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  dx = 5;
}

function draw() {
  background(255, 0, 0)

  //move the rectacgle
  x += dx;


  //display rectangle
  fill(0,255,0)
  rect(x,400,50,150);
}

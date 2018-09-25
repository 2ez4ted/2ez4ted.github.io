// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 0;
let y = 0;


function setup() {



}

function draw() {
  stroke(0);
  createCanvas(400, 400);
  fill (200, 0, 200);
  rect(x, y, 10, 10);
  if (x < 390 && y === 0){
    x += 5;
  }
  else if (x === 390 && y < 390){
    y += 5;
  }
  else if (x > 0 && y === 390){
    x -= 5;
  }
  else if (x === 0 && y > 0){
    y -= 5;
  }




}

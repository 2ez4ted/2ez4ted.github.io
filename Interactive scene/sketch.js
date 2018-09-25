// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 295;
let y = 295;
let side = 10;

function setup() {
}

function draw() {
  createCanvas(600, 600);
  background(0);
  rect(x, y, side, side);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && x > 0) {
    x -= 10;
  }
  else if (keyCode === RIGHT_ARROW && x > 0) {
    x += 10;
  }
  else if (keyCode === UP_ARROW && y > 0) {
    y -= 10;
  }
  else if (keyCode === DOWN_ARROW && y > 0) {
    y += 10;
  }

}

function mouseClicked() {
  if (mouseButton === LEFT) {
    x = 295;
    y = 295;
  }
}

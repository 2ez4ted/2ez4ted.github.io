// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let bgcolor = 0;
let square;
let food;

function setup() {
  createCanvas(600, 600);
  square = {
    startingx: 295,
    startingy: 295,
    sidex: 10,
    sidey: 10,
    fillColor: color(255)
  };

  food = {
    startingx: random(0, 590),
    startingy: random(0, 590),
    sidex: 10,
    sidey: 10,
    fillColor: color(255)
  };
}

function draw() {
  background(bgcolor);
  fill(square.fillColor);
  rect(square.startingx, square.startingy, square.sidex, square.sidey);
  spawnFood();

  if (mouseIsPressed) {
    square.startingx = 295;
    square.startingy = 295;
    createCanvas(600, 600);
  }
}


function keyPressed() {
  if (keyCode === LEFT_ARROW && square.startingx > 0) {
    square.startingx -= 10;
  }
  else if (keyCode === RIGHT_ARROW && square.startingx < 590) {
    square.startingx += 10;
  }
  else if (keyCode === UP_ARROW && square.startingy > 0) {
    square.startingy -= 10;
  }
  else if (keyCode === DOWN_ARROW && square.startingy < 590) {
    square.startingy += 10;
  }
}


function spawnFood() {
  
}

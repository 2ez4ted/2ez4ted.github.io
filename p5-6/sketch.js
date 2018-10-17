// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let food;
let snake;
let ampf = 10;

function setup() {
  createCanvas(600, 600);
  frameRate(20);
	snake = new Snake();
}

function draw() {
  background('grey');
  snake.grow();
  snake.show();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.face(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.face(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.face(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.face(1, 0);
  }
}

















function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;

  this.grow = function() {
    this.x = this.x + this.xSpeed * ampf;
    this.y = this.y + this.ySpeed * ampf;

    this.x = constrain(this.x, 0, width - ampf);
    this.y = constrain(this.y, 0, height - ampf);
  }

  this.show = function() {
    fill(255);
    rect(this.x, this.y, ampf, ampf);
  }

  this.face = function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }
}

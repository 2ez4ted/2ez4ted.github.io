// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
  }

  dir(x, y) {//direction of the snake, simply up down left right called down below
    this.xSpeed = x;
    this.ySpeed = y;
  }

  update() {//move the snake
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    this.x = constrain(this.x, 0, 600-cellSize);
    this.y = constrain(this.y, 0, 600-cellSize);
  }

  display() {
    fill(255);
    rect(this.x, this.y, cellSize, cellSize);
  }
}

class Fruit {
  constructor() {
    let cols = 600 / cellSize;
    let rows = 600 / cellSize;

    this.x = cellSize * floor(random(cols));
    this.y = cellSize * floor(random(rows));
  }

  display() {
    fill("red");
    rect(this.x, this.y, cellSize, cellSize);
  }
}


let someSnake;
let someFruit;
let cellSize = 20;


function setup() {
  createCanvas(600, 600);
  someSnake = new Snake;
  someFruit = new Fruit;
  frameRate(3);
}

function draw() {
  background(50);
  someSnake.update();
  someSnake.display();
  someFruit.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    someSnake.dir(0, -cellSize);
  }
  else if (keyCode === DOWN_ARROW) {
    someSnake.dir(0, cellSize);
  }
  else if (keyCode === RIGHT_ARROW) {
    someSnake.dir(cellSize, 0);
  }
  else if (keyCode === LEFT_ARROW) {
    someSnake.dir(-cellSize, 0);
  }
}

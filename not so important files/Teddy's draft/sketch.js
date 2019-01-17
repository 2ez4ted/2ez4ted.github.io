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
    this.length = 0;
    this.end = [];
  }

  dir(x, y) {//direction of the snake, simply up down left right, called down below
    this.xSpeed = x;
    this.ySpeed = y;
  }

  update() {//move the snake
    if (this.length === this.end.length) {
      for (let i = 0; i < this.end.length-1; i++) {
        this.end[i] = this.end[i+1];
      }
    }
    this.end[this.length-1] = createVector(this.x, this.y);

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    this.x = constrain(this.x, 0, 600-cellSize);
    this.y = constrain(this.y, 0, 600-cellSize);
  }

  display() {
    fill(255);
    for (let i = 0; i < this.end.length; i++) {
      rect(this.end[i].x, this.end[i].y, cellSize, cellSize);
    }
    rect(this.x, this.y, cellSize, cellSize);
  }

  eat(fruit) {
    // Luke simplifies teddy's code.
    if (this.x === fruit.x && this.y === fruit.y) {
      this.length ++;
      return true;
    }
    else {
      return false;
    }
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
  frameRate(10);
}

function draw() {
  background(0);
  someSnake.update();
  someSnake.display();
  someFruit.display();
  if (someSnake.eat(someFruit) === true) {
    someFruit = new Fruit;
    someFruit.display();
  }
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

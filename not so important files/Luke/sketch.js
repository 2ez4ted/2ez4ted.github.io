// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// loading graphics (luke)
let apple;
let snakeBody;
let snakeHead;
function preload() {
  apple = loadImage("assets/apple.png");
  snakeBody = loadImage("assets/snakebody.png");
  snakeHead = loadImage("assets/snakehead.png");
}

class Snake {
  // setting values (Teddy)
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.length = 0;
    this.end = [];
  }

  dir(x, y) {//direction of the snake, simply up down left right called down below (Teddy)
    this.xSpeed = x;
    this.ySpeed = y;
  }

  update() {//move the snake (Teddy)
    if (this.length === this.end.length) {
      for (let i = 0; i < this.length-1; i++) {
        this.end[i] = this.end[i+1];
      }
    }
    this.end[this.length-1] = createVector(this.x, this.y);

    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  // display function redone (luke)
  display() {
    //adding graphics (luke)
    image(snakeHead, this.x, this.y, cellSize, cellSize);
    for (let i = 0; i < this.length; i++) {
      // die from going off screen (luke)
      if (this.x < 0 || this.y < 0 || this.x > 600 || this.y > 600){
        remove();
      }
      image(snakeBody, this.end[i].x, this.end[i].y, cellSize, cellSize);
    }
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

// apple (teddy)
class Fruit {
  constructor() {
    let cols = 600 / cellSize;
    let rows = 600 / cellSize;
    let apple = "assets/apple.png";
    this.x = cellSize * floor(random(cols));
    this.y = cellSize * floor(random(rows));
  }
  // giviong apple graphics (luke)
  display() {
    image(apple, this.x, this.y, cellSize, cellSize);
  }
}

let someSnake;
let someFruit;
let cellSize = 20;

// setup (teddy)
function setup() {
  createCanvas(600, 600);
  someSnake = new Snake;
  someFruit = new Fruit;
  frameRate(5);
}

// draw function (teddy)
function draw() {
  background(50);
  someSnake.update();
  someSnake.display();
  someFruit.display();
  if (someSnake.eat(someFruit) === true) {
    someFruit = new Fruit;
    someFruit.display();
  }
}

// directional input (teddy)
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

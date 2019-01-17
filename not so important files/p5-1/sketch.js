// snake
// November 19th, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let gameStage = 0;
let gameBoard = [];
let numSegments = 10;
let direction = 'right';

let xStart = 0; //starting x coordinate for snake
let yStart = 250; //starting y coordinate for snake
let diff = 10;

let xCor = [];
let yCor = [];

let xFruit = 0;
let yFruit = 0;
let scoreElem;

// function setup() {
//   scoreElem = createDiv("Score = 0");
//   scoreElem.position(20, 20);
//   scoreElem.id = "score";
//   scoreElem.style("color", "white");
//
//   createCanvas(500, 500);
//   frameRate(15);
//   stroke(255);
//   strokeWeight(10);
//   updateFruitCoordinates();
//
//   for (let i = 0; i < numSegments; i++) {
//     xCor.push(xStart + i * diff);
//     yCor.push(yStart);
//   }
// }

function draw() {
  background(0);
  for (let i = 0; i < numSegments - 1; i++) {
    line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
  }
  updateSnakeCoordinates();
  checkGameStatus();
  checkForFruit();
}
function updateSnakeCoordinates() {

  for (let i = 0; i < numSegments - 1; i++) {
    xCor[i] = xCor[i + 1];
    yCor[i] = yCor[i + 1];
  }
  switch (direction) {
    case 'right':
      xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'up':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
      break;
    case 'left':
      xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'down':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] + diff;
      break;
  }
}
function checkGameStatus() {
  if (xCor[xCor.length - 1] > width ||
      xCor[xCor.length - 1] < 0 ||
      yCor[yCor.length - 1] > height ||
      yCor[yCor.length - 1] < 0 ||
      checkSnakeCollision()) {
    noLoop();
    let scoreVal = parseInt(scoreElem.html().substring(8));
    scoreElem.html("Game ended! Your score was : " + scoreVal);
  }
}
function checkSnakeCollision() {
  let snakeHeadX = xCor[xCor.length - 1];
  let snakeHeadY = yCor[yCor.length - 1];
  for (let i = 0; i < xCor.length - 1; i++) {
    if (xCor[i] === snakeHeadX && yCor[i] === snakeHeadY) {
      return true;
    }
  }
}
function checkForFruit() {
  point(xFruit, yFruit);
  if (xCor[xCor.length - 1] === xFruit && yCor[yCor.length - 1] === yFruit) {
    let prevScore = parseInt(scoreElem.html().substring(8));
    scoreElem.html("Score = " + (prevScore + 1));
    xCor.unshift(xCor[0]);
    yCor.unshift(yCor[0]);
    numSegments++;
    updateFruitCoordinates();
  }
}

function updateFruitCoordinates() {
  xFruit = floor(random(10, (width - 100) / 10)) * 10;
  yFruit = floor(random(10, (height - 100) / 10)) * 10;
}

function keyPressed() {
  switch (keyCode) {
  case 74:
    if (direction !== "right") {
      direction = "left";
    }
    break;
  case 76:
    if (direction !== "left") {
      direction = "right";
    }
    break;
  case 73:
    if (direction !== "down") {
      direction = "up";
    }
    break;
  case 75:
    if (direction !== "up") {
      direction = "down";
    }
    break;
  }
}

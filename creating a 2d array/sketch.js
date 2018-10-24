// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"





let rows = 12;
let cols = 12;
let grid;
let cellSize;

function setup() {
  createCanvas(600, 600);
  cellSize = width / cols;
  grid = createRandom2dArray(cols, rows);
}

function draw() {background(255);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill('red');
      }
      else {
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function mousePressed() {
  let x = floor(mouseX / cellSize);
  let y = floor(mouseY / cellSize);

  if (grid[y][x] === 1){
    grid [y][x] = 0;
  }
  else if (grid[y][x] === 0){
    grid [y][x] = 1;
  }
}

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let y = 0; y < rows; y++) {
    randomGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        randomGrid[y].push(0);
      }
      else {
        randomGrid[y].push(1);
      }
    }
  }
  return randomGrid;
}

function deadOrAlive() {
  let liveCounter;
  if (grid[y-1][x-1] === 0) {
    liveCounter ++;
  }
  if (grid[y-1][x-1] === 0) {
    liveCounter ++;
  }
  if (grid[y-1][x-1] === 0) {
    liveCounter ++;
  }
  if (grid[y-1][x-1] === 0) {
    liveCounter ++;
  }
  if (grid[y-1][x-1] === 0) {
    liveCounter ++;
  }
  if (grid[y-1][x-1] === 0) {
    liveCounter ++;
  }
  if (grid[y-1][x-1] === 0) {
    liveCounter ++;
  }
  if (grid[y-1][x-1] === 0) {
    liveCounter ++;
  }
}

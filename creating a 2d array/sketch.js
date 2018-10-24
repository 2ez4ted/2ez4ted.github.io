// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let rows = 5;
let cols = 5;
let grid;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cekkSuze = width / cols;
  grid = createRandom2dArray(cols, rows);
}

function draw() {

}

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
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

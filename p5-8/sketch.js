// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let rows = 4;
let cols = 4;
let cellSize;
let grid;





function setup() {
  createCanvas(450, 670);

  cellSize = width / cols;
  grid = (cols, rows);
}

function draw() {
  background(255, 204, 153);
  textSize(60);
  text("2048", 15, 60);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill(255);
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createGrid() {

}

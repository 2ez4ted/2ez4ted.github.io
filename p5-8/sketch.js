// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let grid = [
  [2, 8, 0, 0],
  [0, 0, 0, 2],
  [0, 16, 4, 0],
  [0, 2, 2, 0]
];
let cellStage = 0;
let cellSize = 105;




function setup() {
  createCanvas(450, 670);
}

function draw() {
  background(255, 204, 153);
  textSize(60);
  fill(0);
  text("2048", 15, 60);
  displayGrid();
}

// function keyPressed() {
//   update();
// }

// function update() {
//   if (keyCode === "UP_ARROW") {
//
//   }
// }

function displayGrid() {
  translate(15, 100);
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      if (grid[y][x] === 0) {
        fill(255, 255, 204); //fill for value none
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === 2) {
        fill(255, 255, 153); //fill for value 2
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(0);
        text("2", x*cellSize + 37.5 , y*cellSize + 75);
      }
      else if (grid[y][x] === 4) {
        fill(255, 255, 102); //fill for value 4
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(0);
        text("4", x*cellSize + 37.5 , y*cellSize + 75);
      }
      else if (grid[y][x] === 8) {
        fill(255, 204, 102); //fill for value 8
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(0);
        text("8", x*cellSize + 37.5 , y*cellSize + 75);
      }
      else if (grid[y][x] === 16) {
        fill(255, 153, 51); //fill for value 16
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(0);
        text("16", x*cellSize + 18.75 , y*cellSize + 75);
      }
    }
  }

}

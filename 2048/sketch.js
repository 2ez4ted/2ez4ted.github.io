// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let grid;
let startingStages = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 4, 8,];
let cellStage = 0;
let cellSize = 105;
let theKey;




function setup() {
  createCanvas(450, 670);
  grid = createGrid();
}

function draw() {
  background(255, 204, 153);
  textSize(60);
  fill(0);
  text("2048", 15, 60);
  displayGrid();
}

function keyTyped() {
  if (key === "r") {
    grid = createGrid();
  }
  else if (key === "w") {
    theKey = "w";
    update();
  }
  else if (key === "s") {
    theKey = "s";
    update();
  }
  else if (key === "d") {
    theKey = "d";
    update();
  }
  else if (key === "a") {
    theKey = "a";
    update();
  }
}

function update() {
  //generate a second grid
  let nextGrid = [];
  for (let i = 0; i < 4; i++) {
    nextGrid.push([]);
    for (let j = 0; j < 4; j++) {
      nextGrid[i].push([]);
    }
  }

  //go through all the cells
  for (let x = 4; x > 0; x--) {
    for (let y = 0; y < 4; y++) {
      //moving up, down, right or left
      if (theKey === "w" && y != 0) {
        nextGrid[x][y-1] = grid[x][y];
      }
      else if (theKey === "s" && y != 4) {
        nextGrid[x][y+1] = grid[x][y];
      }
      else if (theKey === "d" && x != 4) {
        nextGrid[x+1][y] = grid[x][y];
      }
      else if (theKey === "a" && x != 0) {
        nextGrid[x-1][y] = grid[x][y];
      }
    }
  }
  grid = nextGrid();
}

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
      else if (grid[y][x] === 32) {
        fill(255, 102, 0); //fill for value 32
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(0);
        text("32", x*cellSize + 18.75 , y*cellSize + 75);
      }
      else if (grid[y][x] === 64) {
        fill(255, 51, 0); //fill for value 64
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(0);
        text("64", x*cellSize + 18.75 , y*cellSize + 75);
      }
      else if (grid[y][x] === 128) {
        fill(255, 153, 51); //fill for value 128
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(0);
        text("128", x*cellSize + 9.375 , y*cellSize + 75);
      }
      else if (grid[y][x] === 256) {
        fill(255, 153, 255); //fill for value 256
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(0);
        text("256", x*cellSize + 9.375 , y*cellSize + 75);
      }
      else if (grid[y][x] === 512) {
        fill(255, 102, 255); //fill for value 512
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(0);
        text("512", x*cellSize + 9.375 , y*cellSize + 75);
      }
      else if (grid[y][x] === 1024) {
        fill(255, 0, 255); //fill for value 1024
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(0);
        text("1024", x*cellSize + 4.6875 , y*cellSize + 75);
      }
      else if (grid[y][x] === 2048) {
        fill(255, 0, 0); //fill for value 2048
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(0);
        text("2048", x*cellSize + 4.6875 , y*cellSize + 75);
      }
    }
  }
}




function createGrid() {
  let thisGrid = [];
  for (let i = 0; i < 4; i++) {
    thisGrid.push([]);
    for (let j = 0; j < 4; j++) {
      thisGrid[i].push(random(startingStages));
    }
  }
  return thisGrid;
}

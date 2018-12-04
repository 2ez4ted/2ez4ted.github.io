// Maze thing
// Luke Yobb
// Oct 24, 2018

let rows = 20;
let cols = 20;
let grid;
let cellSize;

function preload() {
  grid = loadStrings("assets/map.txt");
}

function setup() {
  createCanvas(windowHeight, windowHeight);
  rows = grid[0].length;
  cols = grid[0].length;
  cellSize = windowHeight / rows;
  spawnFruit();
  cleanUpTheGrid();
}

function draw() {
  background(0);
  displayGrid();
}

// function mouseClicked() {
//   let newGrid = [];
//   for (let y = 0; y < rows; y++) {
//     newGrid[y] = [];
//     for (let x = 0; x < cols; x++) {
//       newGrid[y][x] = grid[y][x];
//       for (let i = random(20); i < rows; i++) {
//         newGrid[i] = [];
//         for (let r = random(20); r < cols; r++) {
//           newGrid[i][r] = grid[i][r];
//         }
//       }
//     }
//   }
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       for (let i = random(20); i < rows; i++) {
//         for (let r = random(20); r < cols; r++) {
//           if (grid[i][r] === "1") {
//             newGrid[i][r] = "2";
//           }
//           else {
//             grid[y][x] = newGrid[i][r];
//           }
//         }
//       }
//     }
//   }
// }

function cleanUpTheGrid() {
  for (let i=0; i<grid.length; i++) {
    grid[i] = grid[i].split("");  //turns it into a 2d array
  }
}

function displayGrid() {
  //Luke
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === "0") {
        stroke(50);
        fill(50);
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === "1") {
        fill(150);
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === "2") {
        fill(255, 0, 0);
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
      //Teddy
      else if (grid[y][x] === "3") {
        fill("red");
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
    }
  }
}

function mouseClicked() {
  spawnFruit();
}

function spawnFruit() {//this function applies to all cases that a new number is threw in
  let spawnLocation = [];
  for (let i = 0; i < rows; i++) {
    for  (let j = 0; j < cols; j++) {
      if (grid[i][j] === 0) {
        spawnLocation.push({
          x: i,
          y: j
        });
      }
    }
  }
  if (spawnLocation.length > 0) {
    let spot = random(spawnLocation);
    grid[spot.x][spot.y] = "3";
  }
}

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let y = 0; y < rows; y++) {
    randomGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        randomGrid[y].push("0");
      }
      else {
        randomGrid[y].push("9");
      }
    }
  }
  return randomGrid;
}

// 2048
// Teddy Yan
// November 16th, 2018
//
// A replication of the arcade game 2048
// Press w, a, s, d to swipe and combine cells
// The ultimate goal is to achieve 2048
// If player cannot combine any cell anymore then he lost. Press r to restart.
let grid;
let cellSize = 105;
let cellStage;
let score = 0;
let stage = 0;


//**************************
//Basic setup of the program
//**************************
function setup() {
  createCanvas(450, 670);
  grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];//this is simply a 4x4 board, there is no need to make it 10x10 anyways

  //because the game is always starting with 2 random numbers
  spawn();
  spawn();
}

function draw() {
  if (canYouMove() === false) {
    stage = 3;//player lost. No more cell can be moved
  }

  if (stage === 0) {
    displayGrid();//normal gaming stage
  }
  else if (stage === 1) {
    victory();//tile 2048 achieved. Player victory
  }
  else if (stage === 2) {
    reportError();//cellStage out of boundary, errors occur
  }
  else if (stage === 3) {
    lost();
  }
  else {
    reportError();
  }
}

//*****************************
//Visual Display of the program
//*****************************
function displayGrid() {

  noStroke();
  background(255, 204, 153);

  fill(115);
  rect(10, 95, 430, 430);

  textSize(60);
  fill(0);
  text("2048", 15, 60);
  text(score, 300, 60);

  fill(115);
  translate(15, 100);
  strokeWeight(3);
  stroke(115);
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      cellStage = grid[y][x];
      if (cellStage === 0) {
        fill(164); //fill for value none
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
      else if (cellStage === 2) {
        fill(255, 255, 204); //fill for value 2
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(0);
        text("2", x*cellSize + 37.5 , y*cellSize + 75);
      }
      else if (cellStage === 4) {
        fill(255, 255, 102); //fill for value 4
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(0);
        text("4", x*cellSize + 37.5 , y*cellSize + 75);
      }
      else if (cellStage === 8) {
        fill(255, 204, 153); //fill for value 8
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255);
        text("8", x*cellSize + 37.5 , y*cellSize + 75);
      }
      else if (cellStage === 16) {
        fill(255, 153, 51); //fill for value 16
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255);
        text("16", x*cellSize + 18.75 , y*cellSize + 75);
      }
      else if (cellStage === 32) {
        fill(255, 102, 0); //fill for value 32
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255);
        text("32", x*cellSize + 18.75 , y*cellSize + 75);
      }
      else if (cellStage === 64) {
        fill(255, 51, 0); //fill for value 64
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255);
        text("64", x*cellSize + 18.75 , y*cellSize + 75);
      }
      else if (cellStage === 128) {
        fill(255, 255, 153); //fill for value 128
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255);
        text("128", x*cellSize + 4.25 , y*cellSize + 75);
      }
      else if (cellStage === 256) {
        fill(255, 255, 102); //fill for value 256
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255);
        text("256", x*cellSize + 4.25 , y*cellSize + 75);
      }
      else if (cellStage === 512) {
        fill(255, 204, 0); //fill for value 512
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255);
        text("512", x*cellSize + 4.25 , y*cellSize + 75);
      }
      else if (cellStage === 1024) {
        fill(255, 153, 0); //fill for value 1024
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255);
        textSize(40);
        text("1024", x*cellSize + 8.75 , y*cellSize + 65);
      }
      else if (cellStage === 2048) {
        fill(255, 0, 0); //fill for value 2048
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(0);
        textSize(40);
        text("2048", x*cellSize + 8.75 , y*cellSize + 65);
        stage = 1;//at this moment you win the game
      }
      else {
        stage = 2;
      }
      translate(0, 0);
    }
  }
}

function victory() {
  background(255);
  noStroke();
  fill(0);
  textSize(11);
  text("Congratulations! You have won the game! Press R to restart.", 100, 335);
}

function reportError() {
  background(255);
  noStroke();
  fill(0);
  textSize(11);
  text("Ooops! Something went wrong! Press R to restart.", 100, 335);
}

function lost() {
  background(255);
  noStroke();
  fill(0);
  textSize(11);
  text("You LOST! Your score is " + score + ". Press R to restart.", 100, 335);
}

//******************************
//functional part of the program
//******************************
function keyPressed() {//shift to a direction
  if (keyCode === 68) {//shift right
    let previous = recordGrid(grid); //trace the current board. function @ line 350
    for (let i = 0; i < 4; i++) {
      grid[i] = movePositive(grid[i]);
    }
    let comparison = compareGrid(previous, grid); //see if there are any changes after player moved to certain directions, if not then do not spawn/ function @ line 331
    if (comparison) {
      spawn();
    }
  }

  else if (keyCode === 65) {//shift left
    let previous = recordGrid(grid);
    for (let i = 0; i < 4; i++) {
      grid[i] = moveNegative(grid[i]);
    }
    let comparison = compareGrid(previous, grid);
    if (comparison) {
      spawn();
    }
  }

  else if (keyCode === 87) {//shift up
    let previous = recordGrid(grid);
    grid = rotateGrid(grid);
    for (let i = 0; i < 4; i++) {
      grid[i] = movePositive(grid[i]);
    }
    grid = rotateGrid(grid);
    grid = rotateGrid(grid);
    grid = rotateGrid(grid);//rotate back to the original grid
    let comparison = compareGrid(previous, grid);
    if (comparison) {
      spawn();
    }
  }

  else if (keyCode === 83) {//shift down
    let previous = recordGrid(grid);
    grid = rotateGrid(grid);
    for (let i = 0; i < 4; i++) {
      grid[i] = moveNegative(grid[i]);
    }
    grid = rotateGrid(grid);
    grid = rotateGrid(grid);
    grid = rotateGrid(grid);
    let comparison = compareGrid(previous, grid);
    if (comparison) {
      spawn();
    }
  }

  else if (keyCode === 82) {//restart
    stage = 0;
    score = 0;
    grid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];

    spawn();
    spawn();
  }
}

//the following functions are correspondant to each direction, due to the nature of arrays increasing in number is 'Positive', decreasing in number is 'Negative'
function swipePositive(row) {
  let arr = row.filter(cellStage => cellStage);
  let missing = 4 - arr.length; //idea qupted: Paul Li
  let zeros = Array(missing).fill(0);
  arr = zeros.concat(arr); //idea quoted: Daniel Sniffman
  return arr;
}

function combinePositive(row) {
  for (let i = 3; i >= 1; i--) {
    let a = row[i];
    let b = row[i - 1];
    if (a === b) {
      row[i] = a + b;
      score += row[i];
      row[i - 1] = 0;
    }
  }
  return row;
}

function movePositive(row) {//apply to each row of the grid to move the cells
  row = swipePositive(row);
  row = combinePositive(row);
  row = swipePositive(row);
  return row;
}

function swipeNegative(row) {
  let arr = row.filter(cellStage => cellStage);
  let missing = 4 - arr.length;
  let zeros = Array(missing).fill(0);
  arr = arr.concat(zeros);
  return arr;
}

function combineNegative(row) {
  for (let i = 0; i < 4; i++) {
    let a = row[i];
    let b = row[i + 1];
    if (a === b) {
      row[i] = a + b;
      score += row[i];
      row[i + 1] = 0;
    }
  }
  return row;
}

function moveNegative(row) {
  row = swipeNegative(row);
  row = combineNegative(row);
  row = swipeNegative(row);
  return row;
}

function rotateGrid(someGrid) {//this function rotate the grid therefore the functions above, which only apply to rows could also apply to columns
  let rotatedGrid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      rotatedGrid[x][y] = someGrid[y][x];
    }
  }

  for (let i = 0; i < 4; i++) {
    rotatedGrid[i] = reverse(rotatedGrid[i]);
  }
  return rotatedGrid;
}

function spawn() {//this function applies to all cases that a new number is threw in
  let spawnLocation = [];
  for (let i = 0; i < 4; i++) {
    for  (let j = 0; j < 4; j++) {
      if (grid[i][j] === 0) {
        spawnLocation.push({
          x: i,
          y: j
        });
      }
    }
  }
  if(spawnLocation.length > 0) {
    let spot = random(spawnLocation);
    //it is either 2 or 4
    grid[spot.x][spot.y] = random([2, 4]);
  }
}

function recordGrid(someGrid) {
  let thisGrid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      thisGrid[x][y] = someGrid[x][y];
    }
  }
  return thisGrid;
}

function compareGrid(gridA, gridB) {
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      if (gridA[x][y] !== gridB[x][y]) {
        return true; //something moved
      }
    }
  }
  return false;
}

function canYouMove() {
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      if (grid[x][y] === 0) {
        return true;
      }
      if (y !== 3 && grid[x][y] === grid[x][y + 1]) {
        return true;
      }
      if (x !== 3 && grid[x][y] === grid[x + 1][y]) {
        return true;
      }
    }
  }
  return false;
}

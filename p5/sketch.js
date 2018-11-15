let grid;
let cellSize = 105;
let cellStage;

function setup() {
  createCanvas(450, 670);
  grid = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  console.table(grid);
  //because the game is always starting with 2 random numbers
  spawn();
  spawn();
	console.table(grid);
}

function draw() {
  background(255, 204, 153);
  textSize(60);
  fill(0);
  text("2048", 15, 60);
  displayGrid();
}

function keyTyped() {
  if (key === "d") {
    for (let i = 0; i < 4; i++) {
      grid[i] = moveRight(grid[i]);
    }
    spawn();
  }
  if (key === "a") {
    for (let i = 0; i < 4; i++) {
      grid[i] = moveLeft(grid[i]);
    }
    spawn();
  }
}


//the following functions are correspondant to each directions
function swipeRight(row) {
  let arr = row.filter(cellStage => cellStage);
  let missing = 4 - arr.length;
  let zeros = Array(missing).fill(0);
  arr = zeros.concat(arr);
  return arr;
}

function combineRight(row) {
  for (let i = 3; i >= 1; i--) {
    let a = row[i];
    let b = row[i - 1];
    if (a === b) {
      row[i] = a+b;
      row[i - 1] = 0;
    }
  }
  return row;
}

function moveRight(row) {
  row = swipeRight(row);
  row = combineRight(row);
  row = swipeRight(row);
  return row;
}

function swipeLeft(row) {
  let arr = row.filter(cellStage => cellStage);
  let missing = 4 - arr.length;
  let zeros = Array(missing).fill(0);
  arr = arr.concat(zeros);
  return arr;
}

function combineLeft(row) {
  for (let i = 0; i < 4; i++) {
		let a = row[i];
		let b = row[i + 1];
		if (a === b) {
			row[i] = a+b;
			row[i + 1] = 0;
		}
	}
	return row;
}

function moveLeft(row) {
	row = swipeLeft(row);
	row = combineLeft(row);
	row = swipeLeft(row);
	return row;
}

function swipeUp(col) {
	let arr = col.filter(cellStage => cellStage);
	let missing = 4 - arr.length;
	let zeros = Array(missing).fill(0);
	arr = arr.concat(zeros);
	return arr;
}

function combineUp(col) {
	for (let i = 0; i < 4; i++) {
		let a = col[i];
		let b = col[i + 1];
		if (a === b) {
			col[i] = a+b;
			col[i + 1] = 0;
		}
	}
	return col;
}

function moveUp(col) {
	col = swipeUp(col);
	col = combineUp(col);
	col = swipeUp(col);
	return col;
}


function spawn() {
	//this function applies to all cases that a new number is threw in
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
		let newSpawnNumber = [2, 4]; //it is either 2 or 4
		grid[spot.x][spot.y] = random(newSpawnNumber);
	}

}

function displayGrid() {
  translate(15, 100);
	strokeWeight(3);
	stroke(255, 204, 153);
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
			cellStage = grid[y][x];
      if (cellStage === 0) {
        fill(255, 255, 204); //fill for value none
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
      else if (cellStage === 2) {
        fill(255, 255, 153); //fill for value 2
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255);
        text("2", x*cellSize + 37.5 , y*cellSize + 75);
      }
      else if (cellStage === 4) {
        fill(255, 255, 102); //fill for value 4
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255);
        text("4", x*cellSize + 37.5 , y*cellSize + 75);
      }
      else if (cellStage === 8) {
        fill(255, 204, 102); //fill for value 8
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
        fill(255, 153, 51); //fill for value 128
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255);
        text("128", x*cellSize + 4.25 , y*cellSize + 75);
      }
      else if (cellStage === 256) {
        fill(255, 153, 255); //fill for value 256
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255);
        text("256", x*cellSize + 4.25 , y*cellSize + 75);
      }
      else if (cellStage === 512) {
        fill(255, 102, 255); //fill for value 512
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255);
        text("512", x*cellSize + 4.25 , y*cellSize + 75);
      }
      else if (cellStage === 1024) {
        fill(255, 0, 255); //fill for value 1024
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255);
        textSize(40);
        text("1024", x*cellSize + 8.75 , y*cellSize + 65);
				textSize(60);
      }
      else if (cellStage === 2048) {
        fill(255, 0, 0); //fill for value 2048
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(0);
				textSize(40);
        text("2048", x*cellSize + 8.75 , y*cellSize + 65);
				textSize(60);
      }
    }
  }
}

// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let cell;
let scl = 10; //scale
let cellstate;

function setup() {
  createCanvas(600, 900);

  cell = {
    x : 0,
    y : 0,
    side : scl,
  };
}

function draw() {
  drawGrid();
}

function drawGrid() {
  for (cell.x = 0; cell.x <= (600 - scl); cell.x += scl) {
		for (cell.y = 0; cell.y <= (600 - scl); cell.y += scl) {
			stroke(0);
    	fill(255);
    	rect(cell.x, cell.y, cell.side, cell.side);
		}
  }
}

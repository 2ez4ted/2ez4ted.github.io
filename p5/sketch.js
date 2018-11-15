function Cell(x, y, width, height, value = 0) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.value = value;

	this.render = function(startX, startY, colour) {
		fill(colour);
		stroke(0);
		rect(startX + (this.x * this.width), startY + (this.y * this.height), this.width, this.height);
	}

	this.changeColour = function(newColour) {
		this.colour = newColour;
		// this.render(this.startX, this.startY);
	}
	this.getX = function() {
		return this.x;
	}
	this.getY = function() {
		return this.y;
	}
	this.getWidth = function() {
		return this.width;
	}
	this.getHeight = function() {
		return this.height;
	}
}


function Grid(columns, rows, cellWidth, cellHeight, startX, startY) {

	this.columns = columns,
	this.rows = rows,
	this.cells = [];
	this.cellWidth = cellWidth;
	this.cellHeight = cellHeight;
	this.startX = startX;
	this.endX = startX + (this.columns * this.cellWidth);
	this.startY = startY;
	this.endY = startY + (this.rows * this.cellHeight);

	this.currentX =  Math.floor((mouseX-this.startX)/cellWidth);
	this.currentY = Math.floor((mouseY-this.startY)/cellHeight);

	for (var i = 0; i < this.columns; i++) {
		this.cells[i] = [];
		for (var j = 0; j < this.rows; j++) {
			this.cells[i][j] = new Cell(i,j, cellWidth, cellHeight);
		}
	}

	this.drawGrid = function() {
		for (var i = 0; i < this.columns; i++) {
			for (var j = 0; j < this.rows; j++) {
				this.cells[i][j].render(this.startX, this.startY, [255,255,255]);
			}
		}
	}

	//replace constant value with formula based on startx and start y of grid
	this.crossHair = function(colour, centerColour) {
		for(var i = 0; i < this.columns; i++) {
			for (var j = 0; j < this.rows; j++) {
				if(i == this.currentX) {
					console.log(j);
					var c = this.getCell(this.currentX, j)
					c.render(this.startX, this.startY, colour);
				}
				if(j == this.currentY) {
					var c = this.getCell(i, this.currentY)
					c.render(this.startX, this.startY, colour);
				}

			}
		}
		var currentCell = this.getCell(this.currentX, this.currentY);
		currentCell.render(this.startX, this.startY, centerColour);
	}


	this.getRows = function() {
		return this.rows;
	}

	this.getColumns = function() {
		return this.columns;
	}

	this.getStartX = function() {
		return this.startX;
	}
	this.getEndX = function() {
		return this.endX;
	}

	this.getStartY = function() {
		return this.startY;
	}
	this.getEndY = function() {
		return this.endY;
	}
	this.getCurrentX = function() {
		return this.currentX;
	}

	this.getCurrentY = function() {
		return this.currentY;
	}
	this.getCell = function(x,y) {
		return this.cells[x][y]
	}

	this.getCurrentX = function() {
		return this.currentX;
	}
	this.getCurrentY = function() {
		return this.currentY;
	}

}

//check if a number is within a min and max range NOT including given max or min
function between(x, min, max) {
	return x > min && x < max;
}


//SETUP runs once at the beginning of the program initialization
function setup() {
	createCanvas(1800, 1800); //width,height
}


//DRAW executes over and over - the MAIN LOOP
function draw() {
	//background must be at the START
	// draw will draw everything to the screen in order of the code

	background(250,204,0);
	//initialize grid
	var grid = new Grid(9,9,75,75, 300, 100);

	grid.drawGrid();

	var inGrid = ((between(mouseX, grid.getStartX(), grid.getEndX())) && (between(mouseY, grid.getStartY(),grid.getEndY())));
	if(inGrid) {
	//              (grid colour, center colour)
		grid.crossHair(225, [200,0,0,60]);
	}

}

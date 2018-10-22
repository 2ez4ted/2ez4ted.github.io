// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let numberOfRects;
let rectWidth;
let rects = [];

let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = 400;
  rectWidth = width / numberOfRects;
  generateRectangles();
}

function keyPressed() {
  generateRectangles();
}

function draw() {
  background(255);
  fill(0);
  displayRects();
}

function displayRects(){
  for (let i = 0; i < rects.length; i++) {
    rect(rects[i].x, rects[i].y, rects[i].w, rects[i].h);
  }
}

function generateRectangles() {
  for (i = 0; i < numberOfRects; i++) {
    let rectHeight = noise(time) * height;
    let someRect = {
      x: i * rectWidth,
      y: height - rectHeight,
      w: rectWidth,
      h: rectHeight
    };

    rects.push(someRect);
    time += 0.01;
  }
}

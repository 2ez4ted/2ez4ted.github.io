// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let state = true;
let row = true;


function setup() {
  createCanvas(40, 40);
  background(255)
}

function draw() {
  for (i = 0; i < 40; i += 5) {
    if (row) {
      state = true;
      row = false;
    }
    else {
      state = false;
      row = true;
    }
    for (j = 0; j < 40; j += 5) {
      if (state) {
        fill(255);
        state = false;
      }
      else {
        fill(0);
        state = true;
      }
      rect(i, j, 5, 5);
    }

  }
}

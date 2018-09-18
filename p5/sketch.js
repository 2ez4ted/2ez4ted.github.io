// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
    createCanvas(1000, 1000);
    background(255);
}

function draw() {
  if (mouseIsPressed && keyIsPressed && key === 'r'){
   rect(mouseX, mouseY, 100, 60);
  }
  else if (mouseIsPressed && keyIsPressed && key === 'e'){
    ellipse(mouseX, mouseY, 60, 60);
  }
  else if (mouseIsPressed && keyIsPressed && key === 'w'){
    ellipse(mouseX, mouseY, 30, 30);
  }
}

// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Ball {
  construct() {
    this.x = mouseX;
    this.y = mouseY;
    this.radius = 10;
    this.color = random(255);
    this.dx = random(-10, 10);
    this.dy = random(-10, 10);
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}



let someBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  someBall = new Ball;
}

function draw() {
  background(255);
  someBall.display();
}

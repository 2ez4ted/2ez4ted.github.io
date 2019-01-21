// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 1;
    this.dy = 1;
  }

  display() {
    fill(0);
    rect(this.x, this.y, 5, 5);
  }

  update() {
    let seed = floor(random(0, 4));
    if (seed === 0) {
      this.x += this.dx;
    }
    else if (seed === 1) {
      this.x -= this.dx;
    }
    else if (seed === 2) {
      this.y += this.dy;
    }
    else if (seed === 3) {
      this.y -= this.dy;
    }
  }
}

let paul;

function setup() {
  createCanvas(windowWidth, windowHeight);
  paul = new Walker(windowWidth/2, windowHeight/2);
}

function draw() {
  paul.display();
  paul.update();
}

// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 25;
    this.dx = random(-10, 0);
    this.dy = random(-3, 3);
    this.transparency = 255;
    this.color = color(random(255), random(255), random(255), this.transparency);
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    this.transparency -= 5;
    this.color.setAlpha(this.transparency);
  }
}


let arr = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function mousePressed() {
  for (let i = 0; i < 100; i++){
    let someParticle = new Particle(mouseX, mouseY);
    arr.push(someParticle);

  }
}

function draw() {
  background(0);
  for(let i = 0; i < arr.length; i++) {
    arr[i].update();
    arr[i].display();

  }

}

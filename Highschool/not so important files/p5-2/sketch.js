// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Timer {
  constructor(timeToWait) {
    this.startTime = millis();
    this.waitTime = timeToWait;
  }

  isDone() {
    if (this.startTime + this.waitTime <= this.startTime) {
      return true;
    }
    else {
      return false;
    }
  }

  reset(timeToWait) {
    this.startTime = millis();
    this.waitTime = timeToWait;
  }
}

let backgroundTimer;
function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundTimer = new Timer(3000);
}
function mousePressed() {
  backgroundTimer.reset(1000);
}
function draw() {
  if (backgroundTimer) {
    background(255, 0, 0);

  }
  else {
    background(255, 255, 0);
  }
}

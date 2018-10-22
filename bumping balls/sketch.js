// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let ball;
let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // ball = {
  //   x: width / 2,
  //   y: height / 2,
  //   radius: 25,
  //   dx: random(-5, 5),
  //   dy: random(-5, 5),
  // };
}



function draw() {
  background(255);
  fill(0);
  //moveBall();
  for (let i = 0; i < balls.length; i++) {
    balls[i].x += balls[i].dx;
    balls[i].y += balls[i].dy;

    if (balls[i].x > width - balls[i].radius || balls[i].x < 0 + balls[i].radius ) {
      balls[i].dx *= -1;
    }
    if (balls[i].y > height - balls[i].radius  || balls[i].y < 0 + balls[i].radius) {
      balls[i].dy *= -1;
    }
    //displayBall();
    ellipse(balls[i].x, balls[i].y, balls[i].radius*2, balls[i].radius*2);
  }

}

function mousePressed() {
  let ball = {
    x: mouseX,
    y: mouseY,
    radius: 25,
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
  balls.push(ball);
}

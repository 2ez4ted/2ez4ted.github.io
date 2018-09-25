// Dodge the rocks
// Teddy Yan
// September 21st
//
// Supposedly you are the cube in a dark, vacant space. Meteors randomply spawn around
// and you have to manage to dodge them but currently I am not capable to find
// the way to spawn meteors so I neglected that part with only one lone cube
// finding itself hopelessly wandering around the dark plane

// Use arrow buttons to control your cube

// left click to reset your game

let x = 295;
let y = 295;
let side = 10;
let bgcolor = 0;
let squarecolor = 255;
let soundQuit;
let soundMove;

function preload() {
  soundQuit = loadSound('assets/laugh.mp3');
  soundMove = loadSound('assets/moving.wav');
}

function setup() {
}

function draw() {
  if (mouseIsPressed) {
    x = 295;
    y = 295;
    soundQuit.play();
  }
  else {
    createCanvas(600, 600);
    background(bgcolor);
    fill(squarecolor);
    rect(x, y, side, side);
  }

}



function keyPressed() {
  if (keyCode === LEFT_ARROW && x > 0) {
    x -= 10;
    soundMove.play();
  }
  else if (keyCode === RIGHT_ARROW && x > 0) {
    x += 10;
    soundMove.play();
  }
  else if (keyCode === UP_ARROW && y > 0) {
    y -= 10;
    soundMove.play();
  }
  else if (keyCode === DOWN_ARROW && y > 0) {
    y += 10;
    soundMove.play();
  }
  else if (keyCode === 82) {//night mode on/off
    if (bgcolor === 0) {
      bgcolor = 255;
      squarecolor = 0;
    }
    else {
      bgcolor = 0;
      squarecolor = 255;
    }
  }

}

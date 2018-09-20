// Project Title
// Your Name
// Date

let backgroundMusic;
let spellSound;

function preload() {
  backgroundMusic = loadSound("assets/ambiant.mp3");
  spellSound = loadSound("assets/spell.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundMusic.setVolume(0.2);
  backgroundMusic.loop();
}

function draw() {

}

function mousePressed() {
  fill(random(255), random(255), random(255), random(255));
  noStroke();
  ellipse(random(width), random(height), 50, 50);
  spellSound.play();
}

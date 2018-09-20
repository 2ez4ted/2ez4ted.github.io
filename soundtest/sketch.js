// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let backgroundMusic;
let spellSound;

function preload() {
  backgroundMusic = loadSound('assets/ambient.mp3');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundMusic.setVolume(0.5);
  backgroundMusic.loop();
}

function draw() {

}

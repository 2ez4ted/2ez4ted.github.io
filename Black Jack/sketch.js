// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Card {
  constructor(cardSuit, cardNumber, x, y) {
    this.cardColor = cardSuit;
    this.cardNumber = cardNumber;
    this.x = x;
    this.y = y;
    this.xLength = 20;
    this.yLength = 30;

  }

  display(x, y) {
    this.x = x;
    this.y = y;
    fill("white");
    rect(this.x, this.y, this.xLength, this.yLength);
  }
}


let deck = [];
let hand = [];
let house = [];
let cardColorList = ["heart", "spade", "club", "diamond"]; //club, spade, heart and diamond
let cardNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let someCard;

function setup() {
  createCanvas(600, 600);

  addDeck(4);
  burnDeck();

  drawCard(hand);
  print
}

function draw() {

  background("green");




  rect(200, 200, 20, 30);
}

function addDeck(deckNumber) {
  for (let x = 0; x < deckNumber; x++) {
    for (let i = 0; i < cardColorList.length; i++) {
      for (let j = 0; j < cardNumberList.length; j++) {
        let someCard = new Card(cardColorList[i], cardNumberList[j]);
        deck.push(someCard);
      }
    }
  }
}

function burnDeck() {
  legitShuffle(deck);
  deck.shift();
}

function drawCard(someArr) {
  someArr.push(deck[0]);
  deck.shift();
}

function legitShuffle(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function discard(someArr) {
  for (let i = 0; i < someArr.length; i ++) {
    someArr.shift();
  }
}

function calculateVal(someArr) {
  let val = 0;
  for (let i = 0; i < someArr.length; i++) {
    val += someArr[i].cardNumber;
  }
  return val;
}

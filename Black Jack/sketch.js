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

let hand = [];
let deck = [];
let cardColorList = ["heart", "spade", "club", "diamond"]; //club, spade, heart and diamond
let cardNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let someCard;

function setup() {
  createCanvas(600, 600);

  addDeck(4);
  burnDeck();
}

function draw() {

  background("green");

  deck[0].display(1, 200);
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
  shuffle(deck, true);
  deck.splice(-1, 1);
}

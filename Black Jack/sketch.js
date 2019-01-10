// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Card {
  construction(cardColor, cardNumber) {
    this.cardColor = cardColor;
    this.cardNumber = cardNumber;
    this.x = 100;
    this.y = 100;

  }

  display() {
    noStroke();
    fill(255);
    rect(this.x, this.y, 20, 30);
  }


}

let hand = [];
let deck = [];
let cardColorList = ["C", "S", "H", "D"]; //club, spade, heart and diamond
let cardNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function setup() {
  createCanvas(600, 600);
  background("green");

  addDeck();
  addDeck();
  addDeck();
  addDeck();

}

function draw() {
  background("green");
  deck[1].display();
}



function addDeck() {
  for (let i = 0; i < cardColorList.length; i++) {
    for (let j = 0; j < cardNumberList.length; j++) {
      let someCard = new Card(i, j);
      deck.push(someCard);
    }
  }
}

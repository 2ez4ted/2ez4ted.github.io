class Card {
  constructor(cardSuit, cardNumber, x, y) {
    this.cardColor = cardSuit;
    this.cardNumber = cardNumber;
    this.x = x;
    this.y = y;
    this.xLength = 20;
    this.yLength = 30;

    this.val = cardNumber;
    if (this.val >= 10) {
      this.val = 10;
    }
  }

  display(x, y) {
    this.x = x;
    this.y = y;
    fill("white");
    rect(this.x, this.y, this.xLength, this.yLength);
    text(this.cardColor, this.x, this.y);
    push();
    textAlign(CENTER);
    fill(0);
    text(this.cardNumber, this.x + this.xLength/2, this.y + this.yLength / 2);
    pop();
  }

  displayBack(x, y) {
    this.x = x;
    this.y = y;
    fill("white");
    rect(this.x, this.y, this.xLength, this.yLength);
  }
}

let deck = [];
let hand = [];
let house = [];

let asset = 1000;
let stake = 0;

let cardColorList = ["heart", "spade", "club", "diamond"]; //club, spade, heart and diamond
let cardNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let someCard;

let betButton;
let bet;
let hitButton;
let stayButton;
let shuffleButton;

let gameStage = -1;

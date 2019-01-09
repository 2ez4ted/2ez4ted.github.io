// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Card {
  construction(cardColor, cardNumber) {
    this.aceDuality = false;

    if (cardNumber > 10) {
      cardNumber = 10;
    }
    else if (cardNumber = 1) {
      this.aceDuality = true;
    }

    this.cardColor = cardColor;
    this.cardNumber = cardNumber;
  }


}

let cardColorList = ["C", "S", "H", "D"]; //club, spade, heart and diamond
let cardNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let hand = new Card;

function setup() {

}

function createDeck() {
  for (i = 0; i < cardColorList.length-1; i++) {
    cardColor = cardColorList[i];
    for (j = 0; j < cardNumberList.length-1; j++) {
      cardNumber = cardNumberList[j];
    }
  }
}

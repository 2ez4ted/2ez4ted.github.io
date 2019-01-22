//this file records the variables and class I used in this program.
//Preloaded assets are in the visual file.

//basic class of poker cards.
class Card {
  constructor(cardSuit, cardNumber, x, y) {
    this.cardColor = cardSuit;
    this.cardNumber = cardNumber;
    this.x = x;
    this.y = y;

    this.val = cardNumber; //value of cards are different from their appearances. In blackjack faces all worth 10.
    if (this.val >= 10) {
      this.val = 10;
    }

    //the following argument is specifically for displaying the cards on canvas.
    this.index = this.cardColor + this.cardNumber;
  }

  display(x, y) {
    this.x = x;
    this.y = y;
    //I am deeply sorry for the incoming 104 lines of hardcoded display mechanism
    if (this.index === "heart1") {
      image(heart1, this.x, this.y, 60, 90);
    }
    else if (this.index === "heart2") {
      image(heart2, this.x, this.y, 60, 90);
    }
    else if (this.index === "heart3") {
      image(heart3, this.x, this.y, 60, 90);
    }
    else if (this.index === "heart4") {
      image(heart4, this.x, this.y, 60, 90);
    }
    else if (this.index === "heart5") {
      image(heart5, this.x, this.y, 60, 90);
    }
    else if (this.index === "heart6") {
      image(heart6, this.x, this.y, 60, 90);
    }
    else if (this.index === "heart7") {
      image(heart7, this.x, this.y, 60, 90);
    }
    else if (this.index === "heart8") {
      image(heart8, this.x, this.y, 60, 90);
    }
    else if (this.index === "heart9") {
      image(heart9, this.x, this.y, 60, 90);
    }
    else if (this.index === "heart10") {
      image(heart10, this.x, this.y, 60, 90);
    }
    else if (this.index === "heart11") {
      image(heart11, this.x, this.y, 60, 90);
    }
    else if (this.index === "heart12") {
      image(heart12, this.x, this.y, 60, 90);
    }
    else if (this.index === "heart13") {
      image(heart13, this.x, this.y, 60, 90);
    }

    else if (this.index === "spade1") {
      image(spade1, this.x, this.y, 60, 90);
    }
    else if (this.index === "spade2") {
      image(spade2, this.x, this.y, 60, 90);
    }
    else if (this.index === "spade3") {
      image(spade3, this.x, this.y, 60, 90);
    }
    else if (this.index === "spade4") {
      image(spade4, this.x, this.y, 60, 90);
    }
    else if (this.index === "spade5") {
      image(spade5, this.x, this.y, 60, 90);
    }
    else if (this.index === "spade6") {
      image(spade6, this.x, this.y, 60, 90);
    }
    else if (this.index === "spade7") {
      image(spade7, this.x, this.y, 60, 90);
    }
    else if (this.index === "spade8") {
      image(spade8, this.x, this.y, 60, 90);
    }
    else if (this.index === "spade9") {
      image(spade9, this.x, this.y, 60, 90);
    }
    else if (this.index === "spade10") {
      image(spade10, this.x, this.y, 60, 90);
    }
    else if (this.index === "spade11") {
      image(spade11, this.x, this.y, 60, 90);
    }
    else if (this.index === "spade12") {
      image(spade12, this.x, this.y, 60, 90);
    }
    else if (this.index === "spade13") {
      image(spade13, this.x, this.y, 60, 90);
    }

    else if (this.index === "club1") {
      image(club1, this.x, this.y, 60, 90);
    }
    else if (this.index === "club2") {
      image(club2, this.x, this.y, 60, 90);
    }
    else if (this.index === "club3") {
      image(club3, this.x, this.y, 60, 90);
    }
    else if (this.index === "club4") {
      image(club4, this.x, this.y, 60, 90);
    }
    else if (this.index === "club5") {
      image(club5, this.x, this.y, 60, 90);
    }
    else if (this.index === "club6") {
      image(club6, this.x, this.y, 60, 90);
    }
    else if (this.index === "club7") {
      image(club7, this.x, this.y, 60, 90);
    }
    else if (this.index === "club8") {
      image(club8, this.x, this.y, 60, 90);
    }
    else if (this.index === "club9") {
      image(club9, this.x, this.y, 60, 90);
    }
    else if (this.index === "club10") {
      image(club10, this.x, this.y, 60, 90);
    }
    else if (this.index === "club11") {
      image(club11, this.x, this.y, 60, 90);
    }
    else if (this.index === "club12") {
      image(club12, this.x, this.y, 60, 90);
    }
    else if (this.index === "club13") {
      image(club13, this.x, this.y, 60, 90);
    }

    else if (this.index === "diamond1") {
      image(diamond1, this.x, this.y, 60, 90);
    }
    else if (this.index === "diamond2") {
      image(diamond2, this.x, this.y, 60, 90);
    }
    else if (this.index === "diamond3") {
      image(diamond3, this.x, this.y, 60, 90);
    }
    else if (this.index === "diamond4") {
      image(diamond4, this.x, this.y, 60, 90);
    }
    else if (this.index === "diamond5") {
      image(diamond5, this.x, this.y, 60, 90);
    }
    else if (this.index === "diamond6") {
      image(diamond6, this.x, this.y, 60, 90);
    }
    else if (this.index === "diamond7") {
      image(diamond7, this.x, this.y, 60, 90);
    }
    else if (this.index === "diamond8") {
      image(diamond8, this.x, this.y, 60, 90);
    }
    else if (this.index === "diamond9") {
      image(diamond9, this.x, this.y, 60, 90);
    }
    else if (this.index === "diamond10") {
      image(diamond10, this.x, this.y, 60, 90);
    }
    else if (this.index === "diamond11") {
      image(diamond11, this.x, this.y, 60, 90);
    }
    else if (this.index === "diamond12") {
      image(diamond12, this.x, this.y, 60, 90);
    }
    else if (this.index === "diamond13") {
      image(diamond13, this.x, this.y, 60, 90);
    }
  }

  displayBack(x, y) {
    this.x = x;
    this.y = y;
    image(cardBack, this.x, this.y, 60, 90);
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
let betVal;
let hitButton;
let stayButton;
let shuffleButton;

let messageDisplayed = false;

let gameStage = -2;

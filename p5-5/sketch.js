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
  }
}


let deck = [];
let hand = [];
let house = [];
let hitStayDialog;
let hitStayBool = false;
let asset = 1000;
let stake = 0;
let cardColorList = ["heart", "spade", "club", "diamond"]; //club, spade, heart and diamond
let cardNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let someCard;

function setup() {
  // stake = prompt("What's your bet?");
  // stake = int(stake);
  // constrain(stake, 1, asset);
  // asset -= stake;
  //
  // drawCard(hand);
  // drawCard(house);
  // drawCard(hand);
  // drawCard(house);
  //
  // hitStayDialog = prompt("The house has," + house[0].val + " you have " + hand[0].val + " " + hand[1].val + " hit or stay?");
  // if (hitStayDialog === "hit") {
  //   hitStayBool = true;
  // }
  // else {
  //   hitStayBool = false;
  // }
  //
  // if (!hitStayBool) {
  //   drawCard(house);
  //
  //   while (calculateVal(house) < 17) {
  //     drawCard(house);
  //   }
  //
  //
  // }
  //
  // else if (hitStayBool) {
  //   drawCard(hand);
  //   if (calculateVal(hand) > 21) {
  //     discard(hand);
  //     discard(house);
  //
  //   }
  // }
}

// function draw() {
//
//   background("green");
//
//
//
//
//   rect(200, 200, 20, 30);
// }

function addDeck(deckNumber) {//add decks
  for (let x = 0; x < deckNumber; x++) {
    for (let i = 0; i < cardColorList.length; i++) {
      for (let j = 0; j < cardNumberList.length; j++) {
        let someCard = new Card(cardColorList[i], cardNumberList[j]);
        deck.push(someCard);
      }
    }
  }
}

function burnDeck() {//Blackjack's process of shuffling the deck and discard a card.
  aShuffle(deck);
  deck.shift();
}

function drawCard(someArr) {//a generic function that the top item from the deck to another list, then delete that list from the deck.
  someArr.push(deck[0]);
  deck.shift();
}

function aShuffle(a) {//Fischer-Yates Shuffle algorithm that gives you legit shuffle
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function discard(someArr) {//a generic function in order to wipe a list out
  for (let i = 0; i < someArr.length; i ++) {
    someArr.shift();
  }
}

function calculateVal(someArr) {//a generic function to calculate the sum of values of cards of a list
  let val = 0;
  for (let i = 0; i < someArr.length; i++) {
    val += someArr[i].cardNumber;
  }
  return val;
}

function compareVal(arr1, arr2) {
  if (calculateVal(arr1) > calculateVal(arr2)) {
    return 1; //arr 1 is bigger
  }
  else if (calculateVal(arr1) === calculateVal(arr2)) {
    return 0;
  }
  else {
    return 2;
  }
}



function houseDrawBool() {
  if (calculateVal(house) < 17) {
    return true;
  }
  else {
    return false;
  }
}

function turnResult() {//hardcode
  let result;
  while (houseDrawBool) {
    drawCard(house);
  }

  if (calculateVal(hand) <= 21) {
    if (calculateVal(house) <= 21) {
      result = compareVal(hand, house);
      if (result === 1) {
        alert("You win!");
      }
      else if (result === 2) {
        alert("You lost.");
      }
      else if (result === 0) {
        alert("PUSH!");
      }
    }
    else {
      alert("Dealer BUST! You win.");
    }
  }
  else {
    alert("BUST! You lost.");
  }
}

function deleteDeck() {
  for (let i = 0; i < deck.length; i++) {
    deck.shift();
  }
}


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

function deleteDeck() {
  for (let i = 0; i < deck.length; i++) {
    deck.shift();
  }
}
//This file allocates all the basic mechanics involving the
//3 lists I used, hand, deck and house.
//hand and house are essentially the same.


function addDeck(deckNumber) {
  //a nested loop to create a number of decks featuring different suits and different card values.
  for (let x = 0; x < deckNumber; x++) {
    for (let i = 0; i < cardColorList.length; i++) {
      for (let j = 0; j < cardNumberList.length; j++) {
        let someCard = new Card(cardColorList[i], cardNumberList[j]);
        deck.push(someCard);
      }
    }
  }
}

function burnDeck(someList) {
  //Blackjack's process of shuffling the deck and discarding a card.
  aShuffle(someList);
  someList.shift();
}

function drawCard(someArr, someDeck) {
  //a generic function being called to push the first element of one list to another list and then remove the called element from its original list.
  someArr.push(someDeck[0]);
  someDeck.shift();
}

function aShuffle(a) {
  //Fischer-Yates Shuffle algorithm that gives you legit shuffle
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function discard(someArr) {//a generic function being called to remove every element inside a list

  //I think it is necessary to notify whoever is reading this document
  //for loop and someArr.shift() does not shift out every single element
  //within a list. The following quoted function is the previous function I
  //used, which is deprecated.

  // function discard(someArr) {
  //   for (let i = 0; i < someArr.length; i++) {
  //     someArr.shift();
  //   }
  // }

  while ((i = someArr.shift()) !== undefined) {
    someArr.shift();
  }
}

function calculateVal(someArr) {//a generic function that returns the value of a hand, either player's or dealer's

// IT WAS KILLING ME to make ace showing two values, both 1 and 11!
//Super hard to tackle this function but im super proud as well..

  let val = 0;
  let isAce = false;
  for (let i = 0; i < someArr.length; i++) {
    val += someArr[i].val;
    if (someArr[i].val === 1) {
      isAce = true;
    }
  }

  if (val + 10 <= 21 && isAce) {
    val += 10;
  }

  return val;
}

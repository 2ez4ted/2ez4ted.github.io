function canvasChars() {
  stroke(0);
  strokeWeight(1);
  text("Asset: " + asset, 0, 20);

  push();
  stroke(12, 12, 12);
  strokeWeight(2);
  textSize(14);
  textAlign(CENTER);
  text("Blackjack pays 3 to 2", 180, 240);
  stroke(0);
  strokeWeight(1);
  text("Dealer must stand on a 17 and draw to 16", 180, 260);
  pop();
}

function setupButtons() {
  bet = createInput();
  bet.position(360, 600);

  betButton = createButton("submit");
  betButton.position(bet.x + bet.width, bet.y);
  betButton.mousePressed(initializeTurn);

  hitButton = createButton("Hit");
  hitButton.position(360, 540);
  hitButton.mousePressed(playerHit);

  stayButton = createButton("stay");
  stayButton.position(360, 570);
  stayButton.mousePressed(playerStay);

  shuffleButton = createButton("shuffle");
  shuffleButton.position(360, 510);
  shuffleButton.mousePressed(resetTurn);
}

function resetTurn() {
  gameStage = -1;
  discard(deck);
  discard(deck);
  discard(deck);
  discard(hand);
  discard(house);
  discard(hand);
  discard(house);
  discard(hand);
  discard(house);

  addDeck(4);
  burnDeck(deck);
}

function initializeTurn() {
  drawCard(hand, deck);
  drawCard(house, deck);
  drawCard(hand, deck);
  drawCard(house, deck);
  gameStage = 0;

  if ((hand[0].cardNumber === 1 && hand[1].cardNumber === 11) || (hand[0].cardNumber === 1 && hand[1].cardNumber === 11)) {
    alert("BLACKJACK!");
    gameStage = -1;
  }
}

function playerHit() {
  drawCard(hand, deck);
  if (calculateVal(hand) <= 21) {
    gameStage = 1;
  }
  else {
    alert("Player has busted.");
    gameStage = -1;
  }
}

function playerStay() {
  while (calculateVal(house) < 17) {
    drawCard(house, deck);
  }

  gameStage = 2;

  if (calculateVal(house) <= 21) {
    if (calculateVal(house) < calculateVal(hand)) {
      alert("Player won.");
    }
    else if (calculateVal(house) === calculateVal(hand)) {
      alert("PUSH!");
    }
    else if (calculateVal(house) > calculateVal(hand)) {
      alert("Dealer has more. Player lost.");
    }
  }

  else {
    alert("Dealer has busted. Player won.");
  }
}

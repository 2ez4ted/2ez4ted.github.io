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

  startButton = createButton("start");
  startButton.position(360, 480);
  startButton.mousePressed(startGame);
}

function startGame() {
  startButton.hide();
  betButton.show();

  addDeck(4);
  burnDeck(deck);

  gameStage = -1.5;
}

function resetTurn() {
  shuffleButton.hide();

  gameStage = -1;
  discard(hand);
  discard(house);
  discard(hand);
  discard(house);
  discard(hand);
  discard(house);

  betButton.show();
  gameStage = -1.5;
}

function initializeTurn() {
  if (deck.length <= 10) {
    alert("Well, thanks for playing this long.");
    alert("But you have been playing long enough, how about another game?");
    
  }
  drawCard(hand, deck);
  drawCard(house, deck);
  drawCard(hand, deck);
  drawCard(house, deck);

  betButton.hide();
  stayButton.show();
  hitButton.show();
  gameStage = 0;

  if ((hand[0].cardNumber === 1 && hand[1].cardNumber === 11) || (hand[0].cardNumber === 11 && hand[1].cardNumber === 1)) {
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
    hitButton.hide();
    stayButton.hide();
    gameStage = -1;
  }
}

function playerStay() {
  stayButton.hide();
  hitButton.hide();

  while (calculateVal(house) < 17) {
    drawCard(house, deck);
  }

  gameStage = 2;

  if (calculateVal(house) <= 21) {
    if (calculateVal(house) < calculateVal(hand)) {
      alert("Player has more. You won.");
    }
    else if (calculateVal(house) === calculateVal(hand)) {
      alert("PUSH!");
    }
    else if (calculateVal(house) > calculateVal(hand)) {
      alert("Dealer has more. You lost.");
    }
  }

  else {
    alert("Dealer has busted. You won.");
  }
}

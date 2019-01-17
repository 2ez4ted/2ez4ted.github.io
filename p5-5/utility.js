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

  hitButton = createButton("Hit");
  hitButton.position(360, 540);
  hitButton.mousePressed(playerHit);

  stayButton = createButton("stay");
  stayButton.position(360, 570);

  shuffleButton = createButton("shuffle");
  shuffleButton.position(360, 510);
  shuffleButton.mousePressed(resetTurn)
}

function resetTurn() {
  deleteDeck();
  discard(hand);
  discard(house);

  addDeck(4);
  burnDeck();
  drawCard(hand);
  drawCard(house);
  drawCard(hand);
  drawCard(house);
  gameStage = 0;
}

function playerHit() {
  drawCard(hand);
  if (calculateVal(hand) <= 21) {
    gameStage = 2;
  }
  else {
    alert("YOU BUST. Turn lost.");
    resetTurn();
  }
}

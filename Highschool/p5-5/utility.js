//this js file is quite self-explanatory. Basically some logical structure
//determining what to display on the canvas.

//bascially letters on the canvas
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

//setting up buttons, they show and hide in different occasions.
function setupButtons() {
  bet = createInput();
  bet.position(70, 380);

  betButton = createButton("submit");
  betButton.position(bet.x + bet.width, bet.y);
  betButton.mousePressed(initializeTurn);

  hitButton = createButton("Hit");
  hitButton.position(190, 400);
  hitButton.mousePressed(playerHit);

  stayButton = createButton("stay");
  stayButton.position(130, 400);
  stayButton.mousePressed(playerStay);

  shuffleButton = createButton("shuffle");
  shuffleButton.position(360, 510);
  shuffleButton.mousePressed(resetTurn);

  startButton = createButton("start");
  startButton.position(160, 380);
  startButton.mousePressed(startGame);
}


//after start button has been pressed
function startGame() {
  startButton.hide();
  betButton.show();
  bet.show();

  addDeck(4);
  burnDeck(deck);

  gameStage = -1.5;
}

//after shuffle button has been pressed
function resetTurn() {
  shuffleButton.hide();

  gameStage = -1;
  discard(hand);
  discard(house);

  betButton.show();
  betVal = 0;
  bet.show();
  gameStage = -1.5;
}

// after submit button has been pressed
function initializeTurn() {
  if (deck.length <= 10) {//when the deck is about to be depleted, this clause triggers and restart the game.
    alert("Well, thanks for playing this long.");
    alert("But you have been playing long enough, how about another game?");
    location.reload();
  }

  //get the bet value for this current turn
  betVal = bet.value();
  betVal = floor(int(betVal));//bet has to be an integer

  if (betVal <= 90 && betVal > 0 && betVal <= asset) {
    asset -= betVal;

    drawCard(hand, deck);
    drawCard(house, deck);
    drawCard(hand, deck);
    drawCard(house, deck);

    bet.hide();
    betButton.hide();
    stayButton.show();
    hitButton.show();
    gameStage = 0;

    //if player drew a blackjack
    //goes by British rule, player has blackjack then even the house also has blackjack, player still gets instantly paid
    if ((hand[0].cardNumber === 1 && hand[1].val === 10) || (hand[0].val === 10 && hand[1].cardNumber === 1)) {
      alert("BLACKJACK!");
      gameStage = 2; //reveal cards

      asset += floor(1.5 * betVal);
    }
  }

  else if (asset === 0) {
    alert("Man your luck runs out! LUCKILY this is a game. So press f5 to reverse time.")
  }

  else if (betVal > asset) {
    alert("Your bet exceed your asset. You either trade your soul with me or give me another number. Sadly you only have one option. Or do you?")
  }

  else {
    alert("Bet must be a number between 1 and 90. We go low stakes. You either go by my rules or go home!");
  }
}

//after hit button has been pressed
function playerHit() {
  drawCard(hand, deck);

  if (calculateVal(hand) <= 21) {
    gameStage = 1;
  }
  else {
    alert("Player has busted.");
    hitButton.hide();
    stayButton.hide();
    gameStage = 2; //reveal cards
  }
}

//after stay button has been pressed
function playerStay() {
  stayButton.hide();
  hitButton.hide();

  while (calculateVal(house) < 17) {
    drawCard(house, deck);
  }

  gameStage = 2; //reveal cards

  if (calculateVal(house) <= 21) {
    if (calculateVal(house) < calculateVal(hand)) {
      alert("Player has more. You won.");
      asset += 2 * betVal;
    }
    else if (calculateVal(house) === calculateVal(hand)) {
      alert("PUSH!");
      asset += betVal;
    }
    else if (calculateVal(house) > calculateVal(hand)) {
      alert("Dealer has more. You lost.");
      //no asset returned.
    }
  }

  else {
    alert("Dealer has busted. You won.");
    asset += 2 * betVal;
  }
}

// Blackjack
// Teddy Yan
// Jan 21st, 2019
//
// Not extra for experts:
// Really this game has gone beyond my expectation. I didn't realize after this semester
// the knowledge I gained from compsci 30 was enough for me to challenge blackjack.
// Mr. Schellenberg showed me Gillian Mcleod's code back in compsci 20, also constructed
// blackjack, but in Java. Her codes and projects were way beyond my realm back then, and
// maybe still beyond my reach now. I attempted to build a card game in python but I had
// no clue, so I gave up.
// Now I am here, presenting the class this final project. I am not proud. I am only pround
// of the calculateVal() function I wrote. However think of it, I did challenge my logic and
// creativity. I dont like challenging myself. I hate jumping out of comfort zone. However here
// I am, writing this randomly written comment endeavouring to express my feelings now.
// Seriously, what else can I say? Thank you Mr. Schellenberg for honest, showing me the architecture
// of computer science. Hopefully in the future I would have the chance to keep pursuing the
// sea of computer science.


/////////////////////////////////////////////////////////////////////////////////////////////////////


//this js file only has the necesarry visual arguments on it. No functions
//variables, classes or objects are given on this file except the basic
//p5 ones.
function setup() {
  createCanvas(360, 540);
  setupButtons();
}

function draw() {
  background("green");
  canvasChars();

  if (!bgm.isPlaying()) {
    bgm.play();
  }

  //gameStage: -2 = Intro page.
  //-1.5 for player to place bets
  //-1 after player ends a turn
  //0, start of a turn. 2 cards in hand and 2 cards in dealer's hand.
  //1, turn undergoing, player can choose to hit or stay.
  //2, turn continuing, player has finished his play and the house draw cards till over 16.

  if (gameStage === -2) {
    if (!messageDisplayed) {
      alert("Thank you for playing Blackjack made by Teddy Yan.");
      alert("This game follows the basic rules of casual game of blackjack.")
      alert("If you have difficulties understanding the rules, please visit: https://www.youtube.com/watch?v=qd5oc9hLrXg");
      alert("The house does not offer split and insurance. By gaming we lose both: our time and treasure. Go to MGM or Caligula's if you wanna go high stake.")
      messageDisplayed = true;
    }

    image(vegas, 0, 0, 360, 590);

    text("click start to continue", 180, 280);

    startButton.show()
    shuffleButton.hide();
    betButton.hide();
    bet.hide();
    stayButton.hide();
    hitButton.hide();
  }

  else if (gameStage === -1) {
    text("click shuffle to continue", 180, 280);

    shuffleButton.show();
    betButton.hide();
    stayButton.hide();
    hitButton.hide();
  }

  else if (gameStage === -1.5) {
    text("click submit to continue", 180, 280);
  }

  else if (gameStage === 0 || gameStage === 1) {
    text("Hand: " + calculateVal(hand), 10, 440);
    displayCards(hand, 10, 450);

    house[0].display(10, 40);
    house[1].displayBack(70, 40);
  }

  else if (gameStage === 2) {
    text("Hand: " + calculateVal(hand), 10, 440);
    displayCards(hand, 10, 450);

    text("Dealer: " + calculateVal(house), 0, 35);
    displayCards(house, 10, 40);

    shuffleButton.show();
  }
}

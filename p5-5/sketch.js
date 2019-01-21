// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
function setup() {
  createCanvas(360, 540);
  setupButtons();

}

function draw() {
  background("green");
  canvasChars();



  //gameStage: -1 = Main menu. Intro page.
  //0, start of a turn. 2 cards in hand and 2 cards in dealer's hand.
  //1, turn undergoing, player can choose to hit or stay.
  //2, turn continuing, player has finished his play and the house draw cards till over 16.

  if (gameStage === -2) {
    text("click start to continue", 180, 280);

    startButton.show()
    shuffleButton.hide();
    betButton.hide();
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

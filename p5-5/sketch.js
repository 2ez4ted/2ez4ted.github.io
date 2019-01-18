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

  if (gameStage === -1) {
    text("click shuffle to continue", 180, 280);

    push();
    fill("red");
    rect(340, 430, 20, 20);
    rect(340, 520, 20, 20);
    pop();
  }

  else if (gameStage === 0 || gameStage === 1) {
    text("Hand: " + calculateVal(hand), 10, 480);
    displayCards(hand, 10, 500);

    house[0].display(10, 40);
    house[1].displayBack(35, 40);


    push();
    fill("red");
    rect(340, 460, 20, 20);
    rect(340, 490, 20, 20);
    pop();
  }

  else if (gameStage === 2) {
    text("Hand: " + calculateVal(hand), 10, 480);
    displayCards(hand, 10, 500);

    text("Dealer: " + calculateVal(house), 10, 90);
    displayCards(house, 10, 40);

    push();
    fill("red");
    rect(340, 430, 20, 20);
    pop();
  }
}







// function compareVal(arr1, arr2) {
//   if (calculateVal(arr1) > calculateVal(arr2)) {
//     return 1; //arr 1 is bigger
//   }
//   else if (calculateVal(arr1) === calculateVal(arr2)) {
//     return 0;
//   }
//   else {
//     return 2;
//   }
// }
//
//
//
// function houseDrawBool() {
//   if (calculateVal(house) < 17) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
//
// function turnResult() {//hardcode
//   let result;
//   while (houseDrawBool) {
//     drawCard(house);
//   }
//
//   if (calculateVal(hand) <= 21) {
//     if (calculateVal(house) <= 21) {
//       result = compareVal(hand, house);
//       if (result === 1) {
//         alert("You win!");
//       }
//       else if (result === 2) {
//         alert("You lost.");
//       }
//       else if (result === 0) {
//         alert("PUSH!");
//       }
//     }
//     else {
//       alert("Dealer BUST! You win.");
//     }
//   }
//   else {
//     alert("BUST! You lost.");
//   }
// }

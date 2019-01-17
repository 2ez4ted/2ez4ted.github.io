// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
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
let betButton;
let bet;
let hitButton;
let stayButton;
let shuffleButton;
let gameStage = -1; //-1 is game hasnt started, 0 is turn has not yet started, 1 is player decision making after having initial cards, 2 is player is still available to hit for more cards




function setup() {
  createCanvas(360, 540);
  setupButtons();
}

function draw() {
  background("green");
  canvasChars();



  if (gameStage === 0) {
    displayCards(hand, 10, 500);

    house[0].display(10, 40);
    house[1].displayBack(35, 40);
  }

  if (gameStage === 2) {
    displayCards(hand, 10, 500);

    house[0].display(10, 40);
    house[1].displayBack(35, 40);
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

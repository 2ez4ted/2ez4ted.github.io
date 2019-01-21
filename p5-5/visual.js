let heart1;
let heart2;
let heart3;
let heart4;
let heart5;
let heart6;
let heart7;
let heart8;
let heart9;
let heart10;
let heart11;
let heart12;
let heart13;
let spade1;
let spade2;
let spade3;
let spade4;
let spade5;
let spade6;
let spade7;
let spade8;
let spade9;
let spade10;
let spade11;
let spade12;
let spade13;
let club1;
let club2;
let club3;
let club4;
let club5;
let club6;
let club7;
let club8;
let club9;
let club10;
let club11;
let club12;
let club13;
let diamond1;
let diamond2;
let diamond3;
let diamond4;
let diamond5;
let diamond6;
let diamond7;
let diamond8;
let diamond9;
let diamond10;
let diamond11;
let diamond12;
let diamond13;
let cardBack;



function preload() {
  heart1 = loadImage("assets/heart_A.png");
  heart2 = loadImage("assets/heart_2.png");
  heart3 = loadImage("assets/heart_3.png");
  heart4 = loadImage("assets/heart_4.png");
  heart5 = loadImage("assets/heart_5.png");
  heart6 = loadImage("assets/heart_6.png");
  heart7 = loadImage("assets/heart_7.png");
  heart8 = loadImage("assets/heart_8.png");
  heart9 = loadImage("assets/heart_9.png");
  heart10 = loadImage("assets/heart_10.png");
  heart11 = loadImage("assets/heart_J.png");
  heart12 = loadImage("assets/heart_Q.png");
  heart13 = loadImage("assets/heart_K.png");
  spade1 = loadImage("assets/spade_A.png");
  spade2 = loadImage("assets/spade_2.png");
  spade3 = loadImage("assets/spade_3.png");
  spade4 = loadImage("assets/spade_4.png");
  spade5 = loadImage("assets/spade_5.png");
  spade6 = loadImage("assets/spade_6.png");
  spade7 = loadImage("assets/spade_7.png");
  spade8 = loadImage("assets/spade_8.png");
  spade9 = loadImage("assets/spade_9.png");
  spade10 = loadImage("assets/spade_10.png");
  spade11 = loadImage("assets/spade_J.png");
  spade12 = loadImage("assets/spade_Q.png");
  spade13 = loadImage("assets/spade_K.png");
  club1 = loadImage("assets/club_A.png");
  club2 = loadImage("assets/club_2.png");
  club3 = loadImage("assets/club_3.png");
  club4 = loadImage("assets/club_4.png");
  club5 = loadImage("assets/club_5.png");
  club6 = loadImage("assets/club_6.png");
  club7 = loadImage("assets/club_7.png");
  club8 = loadImage("assets/club_8.png");
  club9 = loadImage("assets/club_9.png");
  club10 = loadImage("assets/club_10.png");
  club11 = loadImage("assets/club_J.png");
  club12 = loadImage("assets/club_Q.png");
  club13 = loadImage("assets/club_K.png");
  diamond1 = loadImage("assets/diamond_A.png");
  diamond2 = loadImage("assets/diamond_2.png");
  diamond3 = loadImage("assets/diamond_3.png");
  diamond4 = loadImage("assets/diamond_4.png");
  diamond5 = loadImage("assets/diamond_5.png");
  diamond6 = loadImage("assets/diamond_6.png");
  diamond7 = loadImage("assets/diamond_7.png");
  diamond8 = loadImage("assets/diamond_8.png");
  diamond9 = loadImage("assets/diamond_9.png");
  diamond10 = loadImage("assets/diamond_10.png");
  diamond11 = loadImage("assets/diamond_J.png");
  diamond12 = loadImage("assets/diamond_Q.png");
  diamond13 = loadImage("assets/diamond_K.png");
  cardBack = loadImage("assets/cadBack.png");
}



function displayCards(someList, x, y) {
  for (let i = 0; i < someList.length; i++) {
    someList[i].display(x + 60*i, y);
  }
}

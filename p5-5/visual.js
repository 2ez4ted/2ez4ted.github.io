function displayCards(someList, x, y) {
  for (let i = 0; i < someList.length; i++) {
    someList[i].display(x + 25*i, y);
  }
}

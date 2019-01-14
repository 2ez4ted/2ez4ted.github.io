BlackJack for 1
need to have:
  1. Deck and cards. Deck is the essential component of Black Jack consists of multiple cards.
  Cards are objects those carry different values which will essentially determine the result of
  the game.
  2. House. House is basically a virtue player that obeys and only obeys certain rules. The rules
  it obeys are included in the mechanisms section.
  3. Asset. Asset consists of stake and net worth. Player will own certain virtue tokens that will be
  represented by a value in the program. Player can set his own stake each turn.
  4. Basic mechanisms. Mechanisms consist of deck setup, turn setup, decision making and win/loss
  determinations.
    Deck Setup: Setup of the deck with a given value of decks. The deck will shuffle and burn the first
    card automatically as a costume of traditional black jack.

    Turn Setup: Player will draw one card, then house will draw one. Player then will draw another one,
    and House will draw another one which is will remain unseen to the player.

    Decision Making: Based on the current hand, player will have a chance to choose between
    Hit or Stay. player can consecutively hit until he is busted. If player chose to stay, then the program
    jumps to Win/Loss determination stage.
    However, if player had Blackjack after his second draw, the house's card will be revealed and if the house
    doesn't have Blackjack as well, player would get instantly paid.
    IF after two draws, player has two cards in his hand, then he can choose to split. He has to pay the same
    amount of tokens to split further. Player can split as many times as pairs occur within the range of his
    current assets.
    Double down is covered in Nice to Have.

    Win/Loss determination: IF during the decision making stage the sum of player's hand exceeded the range 0 ~ 21
    then the turn automatically ends. Player would lose his stake and House would not draw.
    ELSE IF player chose to stay, then the house would draw as many cards as the house's value remained under 17.
    As soon as the house reached 17 or above, the program would return the value the house and compare with the
    value of player's hand.
    IF House is equivalent to Player then the turn resulted in a PULL. Player would receive the same amount of tokens
    of his stake.
    IF House is less than Player then the turn resulted in a WIN. Player would receive twice as many tokens than his
    stake.
    ELSE IF House is bigger than Player then the turn resulted in a LOSS. Player's tokens would not come back to his hand.
    Applies to each split the player has.
  5. Visuals: Decent visual representation of each component of the game.
  6. Sound: Background music is required essential.

nice to have:
  1. Great animations: Cards shuffling, cards transporting from deck to hand, tokens being placed on the table, etc.
  2. Double down: An optional rule that could potentially result in bigger paybacks for the player.
  3. Insurance: when the first card of the house was 10 or more (JKQA), player could choose to reduce have the stake for insurance.
  Player would receive twice the reduced stake if he won. Player would lose the stake if he lost. Either way, player would get the
  same amount of insurance back.
  4. Safe: Player's total asset will be saved by the system.   
  5. Different Casinos: Default scenario allows the house to have 4 decks at the time. Supposedly if the player owns more
  tokens he can choose to enter bigger casinos.

milestone:
  Dec 22, 2018, finished need to Have
  Dec 25, 2018, came up with the basic logic
  Dec 29, 2018, rewrote the need to Have and nice to Have

  Jan 3, 2019, put down some sketches
  Jan 6, 2019, replaced default p5 shuffle function with Fischer-Yates shuffle
  Jan 11, 2019, finished composing the basic functions (and some stem codes of the functioning part)

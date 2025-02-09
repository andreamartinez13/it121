class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
    toString() {
        const faceCards = {11: 'Jack', 12: 'Queen', 13: 'King', 14: 'Ace'};
        return `${faceCards[this.value] || this.value} of ${this.suit}`;
    }
}

const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const deck = [];

for (const suit of suits) {
    for (const value of values) {
        deck.push(new Card(value, suit));
    }
}

const dealHand = () => {
    let hand  = [];
   

    while (hand.length < 5) {
        let randomIndex;
        
            randomIndex = Math.floor(Math.random() * 52);
       

        if (!hand.includes(deck[randomIndex])){
          hand.push(deck[randomIndex]);
        }

       
 
    }


    $("#card_hand").html(hand.map(card => `<p>${card.toString()}</p>`).join(''));
   
}

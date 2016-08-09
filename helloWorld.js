/**
 * Created by win808mac on 8/9/16.
 */

function sayHi(to) {
    return "Hello, " + to;
}

console.log(sayHi("Doug"));

//Constructors in JS ..

function Card(suit, value, faceUp){
    this.suit = suit;
    this.value = value;
    this.faceUp = faceUp;

    this.flip = function(){
        this.faceUp = !this.faceUp;
    };

    this.toString = function() {
        return this.value + " of " + this.suit;
    };
}

// create a new Card
var card = new Card("Clubs", "Jack", true);

// print out the card
var description = card.toString();
console.log(description);

// print out whether the card is face up or down.
if(card.faceUp) {
    console.log("The card is face up");
} else {
    console.log("The card is face down");
}

// flip the card
card.flip()

// print out whether the card is face up or down again.
if(card.faceUp) {
    console.log("The card is face up");
} else {
    console.log("The card is face down");
}

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

//Parameters: Given a string that contains the card number or type and a suit
//Results: return the suit of the given parameter in lowercase
//Examples:
    // ('3♣') -> return 'clubs'
    // ('3♦') -> return 'diamonds'
    // ('3♥') -> return 'hearts'
    // ('3♠') -> return 'spades'
//Pseudocode: Check if string contains one of the four suits and return it's respective suit in a lowercase string

function defineSuit(card) {
    if (card.includes('♣')) {
        return 'clubs'
    } else if (card.includes('♦')) {
        return 'diamonds'
    } else if (card.includes('♥')) {
        return 'hearts'
    } else if (card.includes('♠')) {
        return 'spades'
    }
}
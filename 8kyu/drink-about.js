// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:
    // Children under 14 old.
    // Teens under 18 old.
    // Young under 21 old.
    // Adults have 21 or more.

//Parameters: Given zero or positive integer representing age.
//Results: Return the appropriate string given the age parameter.
//Examples:
    // 13 --> "drink toddy"
    // 17 --> "drink coke"
    // 18 --> "drink beer"
    // 20 --> "drink beer"
    // 30 --> "drink whisky"
//Pseudocode: 
    //1. Create an if statement or ternary that check's the parameter and returns the appropriate string value

function peopleWithAgeDrink(old) {
    return old >= 21 ? "drink whisky" : old >= 18 ? "drink beer" : old >= 14 ? "drink coke" : "drink toddy";
};

// function peopleWithAgeDrink(old) {
//     if (old >= 21) {
//         return "drink whisky"
//     } else if (old >= 18) {
//         return "drink beer"
//     } else if (old >= 14) {
//         return "drink coke"
//     } else {
//         return "drink toddy"
//     }
// }
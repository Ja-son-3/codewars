// You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

// Your task is to debug the code before your plants die!

//Parameters: Given a number parameter, representing the amount of water your plant has already received for the day.
//Results: Return a string indicating whether your plant has already received 
//Examples:
    // Test.assertEquals(rainAmount(100), "Your plant has had more than enough water for today!")
    // Test.assertEquals(rainAmount(39), "You need to give your plant 1mm of water")
//Pseudocode: 
    //1. Change the if statement to check the parameter, not the function.
    //2. Reverse the return statements from the if and else.
    //3. Change the if else to an else statement. 
    //4. change the else statement to a template literal and remove the concatenation.
    //5. Change the string interpolation in the else return statement with the parameter instead of the function.
    //6. change the if statement from a set operator to a greater than or equal to.
//Time Complexity: O(1) or Constant

//Given
// function rainAmount(mm){
//     if (rainAmount = 40) {
//          return "You need to give your plant " + {rainAmount - 40} + " mm of water"
//     };
//     if else {
//          return "Your plant has had more than enough water for today!"
//     };
// }

function rainAmount(mm){
    if (mm >= 40) {
         return "Your plant has had more than enough water for today!" 
    } else {
         return `You need to give your plant ${40 - mm}mm of water`
    }
}
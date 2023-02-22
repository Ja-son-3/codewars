// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
  
//Parameters: Given a parameter of zero, positive or negative integer.
//Results: Return the string of "Even" or "Odd" in respect to the given parameter.
//Examples:
// it("2 is even", () => {
//     assert.strictEqual(evenOrOdd(2), "Even");
//   });
//   it("7 is odd", () => {
//     assert.strictEqual(evenOrOdd(7), "Odd");
//   });
//   it("-42 is even", () => {
//     assert.strictEqual(evenOrOdd(-42), "Even");
//   });
//   it("-7 is odd", () => {
//     assert.strictEqual(evenOrOdd(-7), "Odd");
//   });
//   it("0 is even", () => {
//     assert.strictEqual(evenOrOdd(0), "Even"); 
//Pseudocode: 
    //1. Create an if statement to check the remainder of the given number parameter divided by two.
    //2. If the remaining value is 0, return the string of "Even"
    //3. Otherwise return the string of "Odd"

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
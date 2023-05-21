// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

//Parameters: Given a number parameter
//Results: Return a number parameter with each digit in the given parameter squared and concatenated.
//Examples:
    //   it("squareDigits(3212) should equal 9414", () => {
    //     assert.strictEqual(squareDigits(3212), 9414);
    //   });
    //   it("squareDigits(2112) should equal 4114", () => {
    //     assert.strictEqual(squareDigits(2112), 4114);
    //   });
    //   it("squareDigits(0) should equal 0", () => {
    //     assert.strictEqual(squareDigits(0), 0);
//Pseudocode: 
    //1. Use the String method to convert the given number parameter in a string.
    //2. Use the string split method on the new string to convert each character into an array element.
    //3. Use the map method on the given array to iterate over each element in the new array.
    //4. Use the parseInt method to convert the string element into a number and square it's value.
    //5. Use the join method to combine the new array of squared values, returning a string.
    //6. use the parseInt method to convert the string into a number and return the result.
//Time Complexity: O(n) or Linear, based on the length of the given number parameter.

function squareDigits(num){
    return parseInt(String(num).split('').map(x => parseInt(x)**2).join(''))
}
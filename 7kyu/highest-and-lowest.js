// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
    // highAndLow("1 2 3 4 5");  // return "5 1"
    // highAndLow("1 2 -3 4 5"); // return "5 -3"
    // highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
    // All numbers are valid Int32, no need to validate them.
    // There will always be at least one number in the input string.
    // Output string must be two numbers separated by a single space, and highest number is first.

//Parameters: Given a string representing number values.
//Results: Return a string with the highest value from the given parameter and the lowest value.
//Examples:
    //   it("Test 1", () => {
    //     assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
    //   });
    //   it("Test 2", () => {
    //     assert.strictEqual(highAndLow("1 2 3"), "3 1");
//Pseudocode: 
    //1. use the string split method with a whitespace operator to seperate each number in the given string into an array element.
    //2. Use the map method to iterate over each element in the array using a unary operator to convert each string into a number.
    //3. Return a string using a template literal.
    //4. Use string interpolation together with the Math.min and Math.max methods to return the max value and min value of the array.
//Time Complexity: O(n) or Linear, depending on the length of the given string due to split method and map method.

function highAndLow(numbers){
    let arr = numbers.split(" ")
    arr = arr.map(e=> +e)
    return `${Math.max(...arr)} ${Math.min(...arr)}`
}
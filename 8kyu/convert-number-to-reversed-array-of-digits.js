// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
    // 35231 => [1,3,2,5,3]
    // 0 => [0]

//Parameters: Given a number that can be zero or an integer
//Results: Given a number, return it's individual digits in reverse order in an array.
//Examples:
    // assert.deepEqual(digitize(35231),[1,3,2,5,3]);
    // assert.deepEqual(digitize(0),[0]);
//Pseudocode: 
    //1. Convert the given number parameter into a string so it can be turned into an array using the toString() method.
    //2. Use the split method in order to seperate each character into it's own element in an array.
    //3. Use the reverse array method to reverse the order of the elements in the array and save its result to a variable.
    //4. Use the array map method to iterate over each item in the array using the Number function or parseInt function to set each element from a string back to a number.
    //5. Return the result.
//Time Complexity: O(n) or linear, depending on the value of the given number.

function digitize(n) {
    let arr = (n.toString().split('').reverse())
    return arr.map(n => Number(n))
    //return arr.map(n => parseInt(n))
}
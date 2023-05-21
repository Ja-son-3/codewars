// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
    // Input: 42145 Output: 54421
    // Input: 145263 Output: 654321
    // Input: 123456789 Output: 987654321

//Parameters: Given an integer number value.
//Results: Return the given integer, but all it's digits in descending order.
//Examples:
    // assert.strictEqual(descendingOrder(0), 0)
    // assert.strictEqual(descendingOrder(1), 1)
    // assert.strictEqual(descendingOrder(111), 111)
    // assert.strictEqual(descendingOrder(15), 51)
    // assert.strictEqual(descendingOrder(1021), 2110)
    // assert.strictEqual(descendingOrder(123456789), 987654321)
//Pseudocode: 
    //1. Use the String method to convert the given number parameter into a string.
    //2. Use the split method to convert each character of the string into array elements.
    //3. Use the map array method to iterate over each element of the given array and apply the parseInt method to convert all string values to number values.
    //4. Use the array sort method to sort all elements by descending order.
    //5. Use the join method to convert all elements of the array into a string.
    //6. Use the parseInt method to convert the string value into a number value and return it.
//Time Complexity: O(n) or Linear, depending on the length of the given number.

function descendingOrder(n){
    return parseInt(String(n).split('').map(x => parseInt(x)).sort((a,b)=> b-a).join(''))
}

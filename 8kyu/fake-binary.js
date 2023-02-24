// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//Parameters: Given a string of numbers.
//Results: Return the string of numbers with all values below 5 returned as 0 and all values 5 and over returned as 1.
//Examples:
    // assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
    // assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
    // assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
//Pseudocode: 
    //1. Use the string split method to seperate each character into it's own element in an array.
    //2. Use the map array method to iterate over each element of the array, checking if they are less than 5. If they are change it's value to 0, otherwise change it's value to 1.
    //3. Use the join method to convert the mapped over array into a string. and return the results.
//Time Complexity: Linear or 0(n) depending on the length of the given string.

function fakeBin(x){
    return x.split('').map(e => e < 5 ? 0 : 1).join('')
}
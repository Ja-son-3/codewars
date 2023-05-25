// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
     // [1, 1, 2] ==> 2
     // [17, 17, 3, 17, 17, 17, 17] ==> 3

//Parameters: Given an array of numbers, where all values are the same except for one.
//Results: Return the odd variable in the given array.
//Examples:
    // assert.strictEqual(stray([1, 1, 2]), 2);
    // assert.strictEqual(stray([1, 2, 1]), 2);
    // assert.strictEqual(stray([2, 1, 1]), 2);
//Pseudocode: 
    //1. Use the array sort method to seperate the odd variable to the beginning or end.
    //2. Use an if statement to check if the element in the first two indexes are the same. If true the odd variable is at the end of the array after sorting and return it.
    //3. Otherwise if false return the first element in the array.
//Time Complexity: O(nlogn) due to sort on crome using merge sort and insertio sort. 


function stray(numbers) {
    numbers.sort()
    if (numbers[0] == numbers[1]) {
        return numbers[numbers.length - 1]
    } else {
        return numbers[0]
    }
}
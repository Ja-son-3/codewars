// DESCRIPTION:
// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
    // Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
    // Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

//Parameters: Given an array of numbers.
//Results: Return an array starting at the lowest value of the given parameter and ending at the largest value in the given parameter in increments of one.
//Examples:
    // assert.deepEqual(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]);
    // assert.deepEqual(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);
    // assert.deepEqual(pipeFix([6,9]),[6,7,8,9]);
    // assert.deepEqual(pipeFix([-1,4]),[-1,0,1,2,3,4]);
    // assert.deepEqual(pipeFix([1,2,3]),[1,2,3]);
//Pseudocode: 
    //1. Create a new empty array variable
    //2. create a for loop that starts at the value at index 0 of the given array and ends when the value reaches the largest value at the end of the given array.
    //3. At each iteration or increment of one in the for loop, push the current value to the array.
    //4. Return the newly created array variable.
//Time Complexity: O(n) or Linear

function pipeFix(numbers){
	let arr = [];
	for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
		arr.push(i);
	}
	return arr;
}
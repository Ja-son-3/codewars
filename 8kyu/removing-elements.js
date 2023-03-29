// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
    // ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//Parameters: Given an array of strings or numbers.
//Results: Return the given array after removing every 2nd element from the array.
//Examples:
    // assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
    // assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
    // assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
    // assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
//Pseudocode: 
    //1. Create a for loop that starts at the index of 1 in the array and with each iteration remove's the next odd index element, which is an even number, accounting for starting at the index or 0.
    //2. Because an element is removed, we only need to count by one as all elements to the right of the removed element has been shifted one.
    //3. Return the spliced array.
//Time Complexity: Quadratic or O(n^2) because splice needs to delete and shift all elements in the array in combination with the for loop.

function removeEveryOther(arr){
    for (i = arr.length-1; i >= 0;i--) {
        if (!i % 2 === 0) {
            arr.splice[i, 1]
        }
    }
    return arr
}
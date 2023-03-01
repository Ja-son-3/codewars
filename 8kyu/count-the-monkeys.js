// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):
    // 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //  1 --> [1]

//Parameters: Given an integer parameter.
//Results: Return an array counting from 1 to the given number parameter.
//Examples:
    // assert.deepEqual((monkeyCount(5)), [1, 2, 3, 4, 5]);
    // assert.deepEqual((monkeyCount(3)), [1, 2, 3]);
    // assert.deepEqual((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    // assert.deepEqual((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    // assert.deepEqual((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
//Pseudocode: 
    //1. Create an empty array variable to contain the return result
    //2. Use a for loop, looping n number of times. With each iteration using the array push method of the current loop number to the empty array.
    //3. Return the array variable.
//Time Complexity: Linear or O(n), depending on the value of the given parameter.

function monkeyCount(n) {
    let arr = []
    for (let i = 1; i <= n;i++) {
      arr.push(i)
    }
    return arr
}
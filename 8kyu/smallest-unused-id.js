// DESCRIPTION:
// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

//Parameters: Given an array of numbers
//Results: Return the first number not in the given array counting in increments of 1 starting from 0.
//Examples:
//   it('returns the lowestNextId', function() {
//     Test.assertEquals(nextId([0,1,2,3,5]), 4);
//   });
//   it('returns the lowestNextId', function() {
//     Test.assertEquals(nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);
//   });
//   it('returns the lowestNextId - unsorted input with duplicates', function() {
//     Test.assertEquals(nextId([1,2,0,2,3,5]), 4);
//Pseudocode: 
    //1. Use a for loop to iterate over each element of the given array. 
    //2. With each iteration check if the current value of i is in the given array. If not return the value of i in that iteration.
//Time Complexity: O(n) or Linear

function nextId(ids){
    for (let i=0;i<=ids.length;i++) {
        if (!ids.includes(i)) {
            return i
        }
    }
}
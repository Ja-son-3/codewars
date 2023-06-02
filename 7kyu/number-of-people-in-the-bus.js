// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

//Parameters: Given an array of sub arrays, containing number pairs. First number of each pair represents the amount of people getting on a bus and the second represents the amount getting off.
//Results: Return the number value of people still on the bus at the end of the array.
//Examples:
    // assert.strictEqual(number([[10,0],[3,5],[5,8]]),5);
    // assert.strictEqual(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
    // assert.strictEqual(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
    // assert.strictEqual(number([[0,0]]),0);
//Pseudocode: 
    //1. Use the array reduce method to iterate over each subarray in the given array, adding the first item at the index of zero and subtracting the value at the index of one and return the result.
//Time Complexity: O(n) or Linear, depending on the length of the given array.

var number = function(busStops){
    return busStops.reduce((a,c)=> a + c[0] - c[1],0)
}
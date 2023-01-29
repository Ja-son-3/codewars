// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

//Parameters: Given three parameters to be used in creating an array. The first value is the lowest value possible in the array. The second value is the highest value possible in the array and the third parameter is the incremental in which one array value moves up from the previous.
//Results: return an array starting at the lowest value, given by the first parameter, with increasing increment based on the value of the third array until no additional increment can be added based on the max value set by the second parameter
//Examples:
    // generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
    // generateRange(1, 10, 3) // should return array of [1,4,7,10]
//Pseudocode: 
    // 1.Create a function with a variable containing an empty array.
    // 2. Create a for loop with i being the min value. The loop will go until i exceeds the max value, going up in increments of step parameter
    // 3. push the value of i in each iteration of the loop to the new empty array and return the array at the end.
function generateRange(min, max, step){
    let arr = []
    for (let i=min;i<=max;i+=step) {
        arr.push(i)
    }
    return arr
}
// Create a function that returns the CSV representation of a two-dimensional numeric array.

//Parameters: Given a two-dimensional numeric array.
//Results: Return the given array in CSV representation
//Examples:
    // input:
    // [[ 0, 1, 2, 3, 4 ],
    //  [ 10,11,12,13,14 ],
    //  [ 20,21,22,23,24 ],
    //  [ 30,31,32,33,34 ]] 
    
    // output:
    //   '0,1,2,3,4\n'
    //  +'10,11,12,13,14\n'
    //  +'20,21,22,23,24\n'
    //  +'30,31,32,33,34'
//Pseudocode: 
    //1. Create a for loop that join's all values within each index using the join() method, seperating each value with a comma to form a string for each index.
    //2. Use the join method to combine each string with a string of \n, representing a new line in CSV representation.
    //3. Return the array string.

function toCsvText(array) {
    for (let i = 0; i < array.length;i++) {
        array[i] = array[i].join(',')
    }
    return array.join('\n')
}
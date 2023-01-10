//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//Parameters - An array of all kinds of values, including boolean, number and string
//Return - return an array where all number 0 are moved to the end of the array, while perserving the original order of the other elements.
//Examples - 
    //moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
////Pseudo Code - 
    //1. Iterate over the given array to identify the zeroes, while simultaneously removing and splitting them between two new arrays, one for zeroes and one for other.
    //2. Next combine the two arrays and return them as a single array with the zeroes at the end

function moveZeros(arr) {
    let other = []
    let zeroes = []
    for (let i=0; i<arr.length;i++) {arr[i] === 0 ? zeroes.push(arr[i]) : other.push(arr[i])}
    //return other.concat(zeroes)
    return [...other,...zeroes]
    }
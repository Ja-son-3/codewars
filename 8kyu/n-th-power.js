// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

//Parameters: given two parameters, an array of positive numbers and non-negative number
//Results: return the value at the index in the given parameter of the second parameter to the power of the second paramater
//Examples:
    // array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
    // array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
//Pseudocode: 
    //1. Use an if statement to check the length of the array compared to the given second parameter
    //2. If the length of the array is less than n, return -1.
    //3. else return the value at nth index in the given array to the power of n

function index(array, n){
    if (n >= array.length) {
        return -1
    } else {
        return Math.pow(array[n], n)
    }
}
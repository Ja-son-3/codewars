// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

//Parameters: Given the two dimensions of a chocolate bar.
//Results: Return the amount of breaks neccessary to break the chocolate bar into dimensions of 1x1.
//Examples:
    // Test.assertEquals(breakChocolate(5, 5) , 24)
    // Test.assertEquals(breakChocolate(1, 1) , 0)
//Pseudocode: 
    //1. Use an if statement to check if the product of the two given dimensions is greater than 0, if not the dimensions are impossible and there is no chocolate bar.
    //2. If true return the product of the two given parameters, subtracted by one and return the result.
    //3. If false there is no chocolate bar, so return a value of 0.
//Time Complexity: O(1) or constant.

function breakChocolate(n,m) {
    if (n*m > 0) return n*m-1
    return 0
}
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

//Parameters: a integer that can be negative or positive and equal to zero.
//Results: Return a result that takes the given parameter and removes all the zeros at the end of the number. If it is zero just return zero.
//Examples:
    // 1450 -> 145
    // 960000 -> 96
    // 1050 -> 105
    // -1050 -> -105
//Pseudocode: 
    //1. Using an if statement, check if the value of the given parameter is zero. If so return zero.
    //2. If the given parameter is not zero check whether the parameter is divisible by 10 using a modulus and setting it to zero.
    //3. If the parameter is not divisble by 10, return the parameter.
    //4. If the parameter is divisible by 10, divide the parameter by 10 put it into a while loop so that it can loop until it is no longer true.
    //5. Return the result

function noBoringZeros(n) {
    if (n === 0) {
        return 0
    } else {
        while (n % 10 === 0) {
            n /= 10
        }
    }
    return n
}
// Return the Nth Even Number

//Parameters: given a whole non zero number
//Results: return the nth even number, n being the given number parameter
//Examples:
    // 1 --> 0 (the first even number is 0)
    // 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
    // 100 --> 198
    // 1298734 --> 2597466
//Pseudocode: If 0 is the first even number, we can arrive at the answer by multiplying the parameter by two and subtracting two.

function nthEven(n){
    return n * 2 - 2
}
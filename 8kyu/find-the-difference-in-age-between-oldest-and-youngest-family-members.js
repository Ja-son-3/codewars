// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

//Parameters: Given an array of numbers.
//Results: Return an array with the the min value, max value and difference between max and min as an array.
//Examples:
    // Test.assertSimilar(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
    // Test.assertSimilar(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
//Pseudocode: 
    //1. Use the Math.min method to find the minimum value in the given array and return it as the first element in a new array.
    //2. In the second array element in the new array, find the max of the given array using the Math.max method.
    //3. In the third index of the new array, subtract the max value by the min value and return that number.
    //4. Return the new array.
//Time Complexity: O(n) or Linear, depending on the size of the given array.

function differenceInAges(ages){
    return [Math.min(...ages),Math.max(...ages),Math.max(...ages) - Math.min(...ages)]
}
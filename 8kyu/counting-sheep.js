// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).


//Parameters: Given an array of true and false boolean values, with true representing a present sheep.
//Results: Return the number of sheep or true values in the given parameter array.
//Examples:
    // Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total")
//Pseudocode: 
    //1. Use the filter array method to return a new array with only true values by using Boolean as the filter. Only values resulting in true will be returned.
    //2. Use the length array method to find the length of the array, representing the amount of present sheep.
    //3. Return the length value.
//Time Complexity: linear or O(n)

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
}
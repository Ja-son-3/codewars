// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:
    // 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
    // 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

//Parameters: Given two integer parameters, the first representing the start point and the second the end point.
//Results: Return the amount of numbers between and including the start and end point minus numbers with 5 in them.
//Examples:
    // Test.assertEquals(dontGiveMeFive(1,9), 8);
    // Test.assertEquals(dontGiveMeFive(4,17), 12);
//Pseudocode: 
    //1. Create an empty array to store the value of all values at and between the start and end point.
    //2. Use a for loop to iterate through the start point to the end point and with each iteration use the arr push method to add the current value to the array.
    //3. Use the filter method on the new arr variable, filtering out any values that include the value of 5. and return the length of the array.
//Time Complexity: O(n) or Linear, depending on amount of numbers between the start and end points.

function dontGiveMeFive(start, end){
    let arr = []
    for (let i=start;i<=end;i++){
      arr.push(`${i}`)
    }
    return arr.filter((e)=>!e.includes(5)).length
}
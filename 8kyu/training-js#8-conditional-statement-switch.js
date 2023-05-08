// Task
// Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+

// Tip: Using default for most of the cases can reduce your work.

//Parameters: Given a number parameter, representing a month out of the calendar year.
//Results: Return the amount of days in the given parameter month.
//Examples:
    // Test.assertSimilar(howManydays(1),31);
    // Test.assertSimilar(howManydays(2),28);
    // Test.assertSimilar(howManydays(3),31);
    // Test.assertSimilar(howManydays(4),30);
    // Test.assertSimilar(howManydays(12),31);
//Pseudocode: 
    //1. Use a switch case statement to return the appropriate number of days for each respective month.
//Time Complexity: Constant of O(1)

function howManydays(month){
    switch (month){
        case 1: return 31
        case 2: return 28
        case 3: return 31
        case 4: return 30
        case 5: return 31
        case 6: return 30
        case 7: return 31
        case 8: return 31
        case 9: return 30
        case 10: return 31
        case 11: return 30
        case 12: return 31
    }
}
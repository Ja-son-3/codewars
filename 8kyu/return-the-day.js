// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

//Parameters: Given a number parameter, representing a day of the week.
//Results: Return the appropriate day of the week corresponding to the given day parameter. If the input is not within the range of 1-7, inform the user the input is invalid.
//Examples:
    // Test.assertEquals(whatday(1),'Sunday')
    // Test.assertEquals(whatday(2), 'Monday')
    // Test.assertEquals(whatday(3),'Tuesday')
    // Test.assertEquals(whatday(8),  'Wrong, please enter a number between 1 and 7')
    // Test.assertEquals(whatday(20),  'Wrong, please enter a number between 1 and 7')
//Pseudocode: 
    //1. Create an if statement that checks for a value between 1 and 7, returning the appropriate string for that day of the week.
    //2. If the given parameter is not in the range of 1-7, return a string indicating the user input is invalid.
//Time Complexity: O(1) or Constant

function whatday(num) {
    if (num === 1) {
        return 'Sunday'
    } else if (num === 2) {
        return 'Monday'
    } else if (num === 3) {
        return 'Tuesday'
    } else if (num === 4) {
        return 'Wednesday'
    } else if (num === 5) {
        return 'Thursday'
    } else if (num === 6) {
        return 'Friday'
    } else if (num === 7) {
        return 'Saturday'
    } else {
        return 'Wrong, please enter a number between 1 and 7'
    }
}
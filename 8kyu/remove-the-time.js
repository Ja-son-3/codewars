// You're re-designing a blog and the blog's posts have the following format for showing the date and time a post was made:

// Weekday Month Day, time e.g., Friday May 2, 7pm

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function, shortenToDate, that takes the Website date/time in its original string format, and returns the shortened format.

// Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm". Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".

//Parameters: Given a string parameter, in the form of weekday month day, time.
//Results: Return the given string without the time portion.
//Examples:
    // Test.assertEquals(shortenToDate("Friday May 2, 9am"), "Friday May 2");
    // Test.assertEquals(shortenToDate("Tuesday January 29, 10pm"), "Tuesday January 29");
    // Test.assertEquals(shortenToDate("Monday December 25, 10pm"), "Monday December 25");
//Pseudocode: 
    //1. Convert the given string into an array using the split method with a comma seperator.
    //2. Return the first element at the index of 0 from the new array.
//Time Complexity: Constant or O(1)

function shortenToDate(longDate) {
    let filtered = longDate.split(',')
    return filtered[0]
}
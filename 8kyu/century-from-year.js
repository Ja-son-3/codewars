// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
    // Given a year, return the century it is in.

//Parameters: Given a number, representing a year value.
//Results: Return the century number, representing the given year parameter provided.
//Examples:
    // Test.assertEquals(century(1705), 18, 'Testing for year 1705');
    // Test.assertEquals(century(1900), 19, 'Testing for year 1900');
    // Test.assertEquals(century(1601), 17, 'Testing for year 1601');
    // Test.assertEquals(century(2000), 20, 'Testing for year 2000');
    // Test.assertEquals(century(89), 1, 'Testing for year 89');
//Pseudocode: 
    //1. Divide the given year parameter by 100 to reduce the value of the given parameter to a factor of a century.
    //2. Use the Math.ceil static method to round up the new value to get the century the original parameter was in.
    //3. Return the Math.ceil value
//Time Complexity: Constant or O(1)

function century(year) {
    return Math.ceil(year/100)
}
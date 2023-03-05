// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"

// Examples:
    // grader(0)   should be "F"
    // grader(1.1) should be "F"
    // grader(0.9) should be "A"
    // grader(0.8) should be "B"
    // grader(0.7) should be "C"
    // grader(0.6) should be "D"

//Parameters: Given a floating number parameter, representing the numerical grade
//Results: Given the numerical value of a grade return the equivalent letter grade as a string.
//Examples:
    // Test.assertEquals(grader(0.7), "C");
    // Test.assertEquals(grader(0.9), "A");
    // Test.assertEquals(grader(0.6), "D");
//Pseudocode: 
    //1. Create an if statement to check each corresponding case.
//Time Complexity: Constant or O(1)

function grader(score) {
    if (score > 1 || score < 0.6) return "F"
    if (score >= 0.9) return "A"
    if (score >= 0.8) return "B"
    if (score >= 0.7) return "C"
    if (score >= 0.6) return "D"
}
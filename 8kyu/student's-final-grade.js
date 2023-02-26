// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:
    // 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
    // 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
    // 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
    // 0, in other cases

// Examples(Inputs-->Output):
    // 100, 12 --> 100
    // 99, 0 --> 100
    // 10, 15 --> 100

    // 85, 5 --> 90

    // 55, 3 --> 75

    // 55, 0 --> 0
    // 20, 2 --> 0

// *Use Comparison and Logical Operators.

//Parameters: Given two integer parameters representing exam score and projects completed, respectively.
//Results: Return the appropriate final grade for a student based on the given parameters.
//Examples:
    // assert.strictEqual(finalGrade(100, 12), 100);
    // assert.strictEqual(finalGrade(85, 5), 90);
//Pseudocode: 
    //1. Create an if statement to check if exam score is over 90 or projects is over 10. If so return a value of 100
    //2. Create an if statement to check if exam score is over 75 and projects is 5 or over. If so return a value of 90
    //3. Create an if statement to check if exam score is over 50 and projects is 2 or over. If so return a value of 75
    //4. Otherwise return a value of 0
//Time Complexity: Constant or 0(1)

function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100
    } else if (exam > 75 && projects >= 5) {
        return 90
    } else if (exam > 50 && projects >= 2) {
        return 75
    } else {
        return 0
    }
}
// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

//Parameters: Given two parameters, representing the birth year and current year of someone.
//Results: Calculate the age of the given person based on the given parameters.
//Examples:
    // Test.assertEquals(calculateAge(2012, 2016),"You are 4 years old.");
    // Test.assertEquals(calculateAge(1989, 2016),"You are 27 years old.");
    // Test.assertEquals(calculateAge(2000, 2090),"You are 90 years old.");
    // Test.assertEquals(calculateAge(2000, 1990),"You will be born in 10 years.");
    // Test.assertEquals(calculateAge(3400, 3400),"You were born this very year!"); 
    // Test.assertEquals(calculateAge(900, 2900),"You are 2000 years old.");
    // Test.assertEquals(calculateAge(2010, 1990),"You will be born in 20 years.");
    // Test.assertEquals(calculateAge(2010, 1500),"You will be born in 510 years.");
    // Test.assertEquals(calculateAge(2011, 2012),"You are 1 year old.");
    // Test.assertEquals(calculateAge(2000, 1999),"You will be born in 1 year.");
//Pseudocode: 
    //1. Create an if statement to check current year and birth year are the same, if so they were born this year.
    //2. Create an if statement to check if the current year is one year larger than the birth year, if so return a string indicating they are one year old.
    //3. Create an if statement to check if the birth year is one year greater than the current year, if so return a string indicating they will be born in one year.
    //4. Create an if statement to check if birth year is greater than the current year, if so indicate how many years until they are born.
    //5. In all other cases the current year is greater than the birth year, so return a string indicating their current age.
//Time Complexity: O(1) or Constant

function  calculateAge(a,b) {
    if (a === b) {
      return "You were born this very year!"
    } else if (b-a === 1) {
      return `You are 1 year old.`
    } else if (a-b === 1) {
      return "You will be born in 1 year."
    } else if (a > b) {
      return `You will be born in ${a-b} years.`
    } else {
      return `You are ${b-a} years old.`  
    }
  }
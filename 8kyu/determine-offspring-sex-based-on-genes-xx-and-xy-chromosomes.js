// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

//Parameters: Given a string parameter, representing the genetic chromosomes of a newborn.
//Results: Return a string indicating the sex of the newborn based on the given parameter.
//Examples:
    // Test.assertEquals(chromosomeCheck('XY'), "Congratulations! You're going to have a son.")
    // Test.assertEquals(chromosomeCheck('XX'), "Congratulations! You're going to have a daughter.")
//Pseudocode: 
    //1. Use an if statement to check if the given parameter is a string of XY, if so return a string of "Congratulations! You're going to have a son."
    //2. Otherwise return a string of "Congratulations! You're going to have a daughter."
//Time Complexity: O(1) or Constant

function chromosomeCheck(sperm) {
  if (sperm === 'XY') {
    return "Congratulations! You're going to have a son."
  }
  return "Congratulations! You're going to have a daughter."
}
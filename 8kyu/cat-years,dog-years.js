// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:
    // humanYears >= 1
    // humanYears are whole numbers only
// Cat Years
    // 15 cat years for first year
    // +9 cat years for second year
    // +4 cat years for each year after that
// Dog Years
    // 15 dog years for first year
    // +9 dog years for second year
    // +5 dog years for each year after that

//Parameters: Given humanYears that is always equal to or greater than one and is a whole number
//Results: return the humanYears parameter in cat and dog years
//Examples:
    //  Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
    //  Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
    //  Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
//Pseudocode: 
    //1. Check with humanYears is 1 or 2, if so return their predefined values
    //2. If  humanYears is greater than two, return year 2 values + each additional year past year 2

var humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears === 1) {
    return [1,15,15]
  } else if (humanYears === 2) {
    return [2,24,24]
  } else {
    return [humanYears, (humanYears-2) * 4 + 24, (humanYears-2) * 5 + 24]
  }
}

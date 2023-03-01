// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:
    // n= 5, m=5: 25
    // n=-5, m=5:  0

//Parameters: Given two integer numbers that can be 0, positive or negative.
//Results: If either of the given parameters have a value of 0 or less, return 0
//Examples:
    // assert.strictEqual(paperwork(5,5), 25, 'Failed at paperwork(5, 5)');
    // assert.strictEqual(paperwork(5,-5), 0, 'Failed at paperwork(5, -5)');
    // assert.strictEqual(paperwork(-5,-5), 0, 'Failed at paperwork(-5, -5)');
    // assert.strictEqual(paperwork(-5,5), 0, 'Failed at paperwork(-5, 5)');
    // assert.strictEqual(paperwork(5,0), 0, 'Failed at paperwork(5, 0)');
//Pseudocode: 
    //1. Use an if statement to check if either of the two given parameter's value is less than zero. If so return a value of zero
    //2. Otherwise return the product of n and m.
//Time Complexity: Constant of O(1)

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0
  } else {
    return n * m
  }
}

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
    // Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//Parameters: Given an array of numbers representing the score of students in the class and a number parameter representing your score.
//Results: Return a boolean value of true if your school is above the class average and false if it is not.
//Examples:
    // it("betterThanAverage([2, 3], 5) should return True", function() {
    //   assert.strictEqual(betterThanAverage([2, 3], 5), true);

    // it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function() {
    //   assert.strictEqual(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);

    // it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", function() {
    //   assert.strictEqual(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);

    // it("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False", function() {
    //   assert.strictEqual(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);

    // it("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False", function() {
    //   assert.strictEqual(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);
//Pseudocode: 
    //1. Compute the average of the class using a reduce array method.
    //2. Divide it's results by the amount of students or length of the given array to get the average score in the class.
    //3. Use an if statement to return true if your score is higher than the class average. Otherwise return false.
//Time Complexity: Linear or O(n) based on the length of the classPoints array

function betterThanAverage(classPoints, yourPoints) {
    let avg = classPoints.reduce((a,c) => a+c,0)/classPoints.length
    return yourPoints > avg
}
  
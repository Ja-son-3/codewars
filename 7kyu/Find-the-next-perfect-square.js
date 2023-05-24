// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

//Parameters: Given a number parameter.
//Results: Return the next squared value if the given parameter if it is a perfect square. If not return a value of -1
//Examples:
    // Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121");
    // Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625");
    // Test.assertEquals(findNextSquare(319225), 320356, "Wrong output for 319225");
    // Test.assertEquals(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
    // });
    // it("should return -1 for numbers which aren't perfect squares", function() {
    // Test.assertEquals(findNextSquare(155), -1, "Wrong output for 155");
    // Test.assertEquals(findNextSquare(342786627), -1, "Wrong output for 342786627");
//Pseudocode: 
    //1. Create an if statement to check if the given parameter is a perfect square, by comparing it's square rooted value with it's rounded value. Return -1 
    //2. Otherwise square rooot the given parameter, add one and square the value to get the next perfect squared value and return it.
//Time Complexity: O(1) or Constant

function findNextSquare(sq) {
    if (sq**.5 !== Math.floor(sq**.5)) return -1
    return ((sq**.5)+1)**2
}
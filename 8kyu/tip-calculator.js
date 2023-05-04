// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:
    // Terrible: tip 0%
    // Poor: tip 5%
    // Good: tip 10%
    // Great: tip 15%
    // Excellent: tip 20%

// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
    // "Rating not recognised" in Javascript, Python and Ruby...
    // ...or null in Java
    // ...or -1 in C#

// Because you're a nice person, you always round up the tip, regardless of the service.

//Parameters: Given a number parameter, representing the total amount of the bill and a string parameter, representing the quality of service recieved.
//Results: Return the proper tip amount based on the given amount and quality of service recieved. 
//Examples:
    // Test.assertEquals(calculateTip(20, "Excellent"), 4);
    // Test.assertEquals(calculateTip(26.95, "good"), 3);
//Pseudocode: 
    //1. Create an if statement to check if service was terrible, if so return a value of 0
    //2. Create an if statement to check if service was poor, if so return a value of amount multiplied by 5% and rounded up to the nearest integer using the Math.ceil method.
    //3. Create an if statement to check if service was good, if so return a value of amount multiplied by 10% and rounded up to the nearest integer using the Math.ceil method.
    //4. Create an if statement to check if service was great, if so return a value of amount multiplied by 15% and rounded up to the nearest integer using the Math.ceil method.
    //5. Create an if statement to check if service was excellent, if so return a value of amount multiplied by 20% and rounded up to the nearest integer using the Math.ceil method.
    //6. In all other cases return a string of "Rating not recognised" to indicate a non-recognizable rating.
//Time Complexity: O(1) or Constant

function calculateTip(amount, rating) {
    if (rating.toLowerCase() === "terrible") return 0
    if (rating.toLowerCase() === "poor") return Math.ceil(amount * .05)
    if (rating.toLowerCase() === "good") return Math.ceil(amount * .1)
    if (rating.toLowerCase() === "great") return Math.ceil(amount * .15)
    if (rating.toLowerCase() === "excellent") return Math.ceil(amount * 0.2)
    return "Rating not recognised"
}
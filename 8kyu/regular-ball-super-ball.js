// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
    // ball1 = new Ball();
    // ball2 = new Ball("super");
    // ball1.ballType     //=> "regular"
    // ball2.ballType     //=> "super"

//Parameters: Given an empty of string parameter.
//Results: Set the property of the class property of ballType to the value given and if no value is given give it a value of regular.
//Examples:
    // Test.assertEquals(new Ball().ballType, "regular");
    // Test.assertEquals(new Ball("super").ballType, "super");
//Pseudocode: 
    //1. Use an if statement to check if the given ballType parameter has a value. If not set ballType to be equal to the string of regular.
    //2. Otherwise set the ballType to super.
//Time Complexity: O(1)

var Ball = function(ballType) {
    if (!ballType){
      this.ballType = 'regular';
    }
    else {
      this.ballType= 'super';
    }
};
// Task
// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

// Note: Input will either be a positive integer (or a string for untyped languages).

//Parameters: Given a number or string parameter, representing a number.
//Results: Find out of the square of the given parameter is greater than 1000, if so return a string of "It's hotter than the sun!!", otherwise return a string of 'Help yourself to a honeycomb Yorkie for the glovebox.'
//Examples:
    // assert.strictEqual(apple('50'), 'It\'s hotter than the sun!!'); 
    // assert.strictEqual(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.'); 
//Pseudocode: 
    //1. Use the unary operator to convert the given parameter
//Time Complexity: O(1) or Constant

function apple(x){
    if ((+x) > 31) {
      return 'It\'s hotter than the sun!!'
    }
    return 'Help yourself to a honeycomb Yorkie for the glovebox.'
}
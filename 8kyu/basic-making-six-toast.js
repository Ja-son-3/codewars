// Story:
// You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.

// Problem:
// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.
// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

// Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:
    // six_toast(5) == 1

// And in case of 12 you need 6 toasts less (but not -6):
    // six_toast(12) == 6

//Parameters: Given a integer parameter, representing the amount of toast currently in the toasters.
//Results: Return a result of how much toast are needed to reach 6 or how much over 6.
//Examples:
    // Test.assertEquals(sixToast(6), 0);
    // Test.assertEquals(sixToast(17), 11);
    // Test.assertEquals(sixToast(3), 3);
//Pseudocode: 
    //1. Create an if statement to check if the current amount of toast is 6 or greater, if so find the amount over six by subtracting the given parameter by 6 and return the result.
    //2. Otherwise the given parameter must be less than 6, so to find the amount of toast needed to reach 6 can be found by subtracting 6 by the given parameter and return the result.
//Time Complexity: O(1) or Constant.

function sixToast(num) {
    if (num >= 6) {
        return num - 6
    } else {
        return 6 - num
    }
}
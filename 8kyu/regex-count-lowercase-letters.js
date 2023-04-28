// Your task is simply to count the total number of lowercase letters in a string.

// Examples
    // lowercaseCount("abc"); ===> 3
    // lowercaseCount("abcABC123"); ===> 3
    // lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3
    // lowercaseCount(""); ===> 0;
    // lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0
    // lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

//Parameters: Given a string parameter that can be empty or contain letters, numbers and special characters.
//Results: Return the amount of characters in the given string that are lowercase.
//Examples:
    // Test.assertEquals(lowercaseCount("abc"), 3);
    // Test.assertEquals(lowercaseCount("abcABC123"), 3);
    // Test.assertEquals(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3);
    // Test.assertEquals(lowercaseCount(""), 0)
    // Test.assertEquals(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
    // Test.assertEquals(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);
//Pseudocode: 
    //1. Create a new number variable to keep count.
    //2. Create a for of loop that iterates over each character in the given string.
    //3. With each iteration use the match method with regex for lowercase letter validation and if true for the current character add one to the count variable.
    //4. Return the count variable.
//Time Complexity: O(n) or Linear

function lowercaseCount(str){
    let count = 0
    for (const char of str) {
        if (char.match(/[a-z]/)) {
            count += 1
        }
    }
    return count
}
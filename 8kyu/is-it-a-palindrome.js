// Write a function that checks if a given string (case insensitive) is a palindrome.

//Parameters: Given a string parameter that can be empty
//Results: Return true or false depending on whether the given string is a paldindrome
//Examples:
    // it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
    // it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
    // it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
    // it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
    // it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
    // it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
    // it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
    // it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
//Pseudocode: 
    //1. In order to get the reverse of the given string use the split method to turn each character into an element in an array.
    //2. Use to reverse array method to reverse the order of the array.
    //3. Use the join method to combine all elements back into a string.
//Time Complexity: Linear or O(n), depending on the length of the given string 

function isPalindrome(x) {
    return x.split("").reverse().join("").toLowerCase() == x.toLowerCase()
}
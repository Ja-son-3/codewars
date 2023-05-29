// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
    // isIsogram "Dermatoglyphics" = true
    // isIsogram "moose" = false
    // isIsogram "aba" = false

//Parameters: Given a string parameter.
//Results: Return whether the given string parameter is an isogram.
//Examples:
    // assert.strictEqual( isIsogram("Dermatoglyphics"), true );
    // assert.strictEqual( isIsogram("isogram"), true );
    // assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
    // assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
    // assert.strictEqual( isIsogram("isIsogram"), false );
    // assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
//Pseudocode: 
    //1. Create an if statement that checks if the given string parameter is an empty string. If true return true.
    //2. use to toLowerCase string method to convert all characters to lowercase to account for case-sensitivity.
    //3. Use the string split method to convert each character of the string into an array element.
    //4. Use the array sort method to group all identical characters together in the array.
    //5. Create a for loop that iterates over each item in the array.
    //6. With each iteration use an if statement to check if the current element is the same as the next, if so return false.
    //7. Otherwise return true at the conclusion at the for loop.
//Time Complexity: Linear or O(n), depending on the length of the given string.

function isIsogram(str){
    if (str.isEmpty) return true
    str = str.toLowerCase()
    let arr = str.split('')
    arr = arr.sort()
    for (let i=0;i<arr.length;i++){
      if (arr[i] == arr[i+1]) {
        return false
      }
    }
    return true
}
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
    // "4556364607935616" --> "############5616"
    //      "64607935616" -->      "#######5616"
    //                "1" -->                "1"
    //                 "" -->                 ""

    // // "What was the name of your first pet?"

    // "Skippy" --> "##ippy"

    // "Nananananananananananananananana Batman!"
    // -->
    // "####################################man!"

//Parameters: Given a string parameter.
//Results: Return the given string replacing all characters of the string but the last four with #'s.
//Examples:
    // Test.assertEquals(maskify('4556364607935616'), '############5616');
    // Test.assertEquals(maskify('1'), '1');
    // Test.assertEquals(maskify('11111'), '#1111');
//Pseudocode: 
    //1. Create an if statement that checks if the given string is a length of 4 or less. If true return the given string.
    //2. Get the last four characters of the given parameter by using the slice method.
    //3. Create a string of #'s, equivalent to the given string's length minus 4 using the repeat method.
    //4. Concatenate the string of #'s with the last four characters of the given string and return the string.
//Time Complexity: O(n) or Linear, depending on the length of the given string.

function maskify(cc) {
    if (cc.length < 5) {
      return cc
    }
    let end = cc.slice(-4)
    let filler = "#".repeat(cc.length-4)
    return filler + end
}
  
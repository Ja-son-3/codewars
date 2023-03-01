// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
    // S is misinterpreted as 5
    // O is misinterpreted as 0
    // I is misinterpreted as 1

// The test cases contain numbers only by mistake.

//Parameters: Given a string parameter.
//Results: Return the given string parameter, replacing 5 values as S, 0 values as O and 1 values as I.
//Examples:
    // assert.strictEqual(correct("L0ND0N"),"LONDON");
    // assert.strictEqual(correct("DUBL1N"),"DUBLIN");
    // assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
    // assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
    // assert.strictEqual(correct("PAR15"),"PARIS");
//Pseudocode: 
    //1. Split the string using the string method into an array of elements for each character.
    //2. Iterate over each element of the array using the map method together with the hasOwnProperty method to check if the element is a misinterpreted element.
    //3. If it is replace it with its corresponding current character.
    //4. Use the join method over the resulting array to return a string value.
    //5. Return the string result.
//Time Complexity: Linear or O(n), depending on the length of the given string array.

function correct(string) {
    const corrections = { "5": "S", "0": "O", "1": "I"}
    return string.split("").map(e => corrections.hasOwnProperty(e) ? corrections[e] : e).join("")
}
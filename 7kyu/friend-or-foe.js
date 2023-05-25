// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.
    //friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

// Note: keep the original order of the names in the output.

//Parameters: Given an array of strings.
//Results: Return only elements in the given array that have a length of four.
//Examples:
    // assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
    // assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
    // assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
    // assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])
//Pseudocode: 
    //1. Use the filter method to filter and return only elements in the given array with a length of 4
//Time Complexity: O(n) or Linear, depending on the length of the given array.

function friend(friends){
    return friends.filter(e=> e.length === 4)
}
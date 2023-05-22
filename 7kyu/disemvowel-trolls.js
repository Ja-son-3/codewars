// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//Parameters: Given a string parameter of lower case letters and spaces
//Results: Return the given string with vowels removed.
//Examples:
    // assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
    // assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
    // assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
//Pseudocode: 
    //1. Use the str split method to seperate each character in the given array into an element in an array.
    //2. create an array containing all vowels.
    //3. Use the array filter method to iterate over the split array and to remove any elements that are vowels.
    //4. Return the filtered array as a string using the join method.
//Time Complexity: O(n) or Linear, based on the length of the given string.

function disemvowel(str) {
    let arr = str.split('')
    let vowels = ["a","e","i","o","u","A","E","I","O","U"]
        let filtered = arr.filter(e=> !vowels.includes(e))
        return filtered.join('')
}
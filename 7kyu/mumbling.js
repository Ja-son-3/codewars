// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
    // accum("abcd") -> "A-Bb-Ccc-Dddd"
    // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    // accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

//Parameters: Given a string parameter.
//Results: Return the given string parameter seperated by a dash. Each segment will start with a capitalized letter, followed by lowercase letters. Each letter will repeat it's index number of times in the original string parameter.
//Examples:
    // Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
    // Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
    // Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
    // Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
    // Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
//Pseudocode: 
    //1. Create an empty array to contain the return result.
    //2. Create a variable replicating the given string but with all lowercase using the toLowerCase method.
    //3. Create a for loop that iterates through the length of the given string.
    //4. With each iteration create a variable to be the first character, which is capitalized using the toUpperCase() method.
    //5. With each iteration create a variable that will contain the rest of the string by using the repeat method to repeat the given string character as lowercase letters.
    //6. With each iteration concat the capitalized letter variable with the repeating lowercase variable and push it to the created result array.
    //7. Return the result array as a string using the join method with a dash seperator between each element.
//Time Complexity: Quadratic or O(n^2), depending on the length of the given string. Each additional character results in an increment increase in the amount of loops in the for loop and the amount repeated using repeat method.

function accum(s) {
    const result = []
    let lowerCase = s.toLowerCase()
  
    for (let i=0;i<s.length;i++){
        let first = s[i].toUpperCase()
        let rest = lowerCase[i].repeat(i)
        result.push(first + rest)
    }
    return result.join('-')
}
//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

//Parameters - a string with a varying number of words in it. Words may have punctuation marks seperated by a space.
//Result - Return a string, appending removing and moving the first letter of each word to the end, while also adding "ay", leaving alone spaces and punctuation marks with 
//Examples -
    //pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    //pigIt('Hello world !');     // elloHay orldway !
//Pseudo Code - 
    //1. Split the string into individual parts. 
    //2. Afterwards splitting each part into two parts encompassing the first letter and the rest of the string. 
    //3. Next reverse the order of these parts so that the first letter is at the end.
    //4. Next check if it is a word or a punctuation mark. If it is a word then add "ay" to the end of the word.
    //5. Finally concatenate the individual parts together and return the string.


function pigIt(str){
    let marks = ['.', ',', '!', '"', "'", "?"]
    let result = str.split(' ').map(word => word.slice(1) + word[0] + (marks.includes(word) ? '' : 'ay')).join(' ')
    return result
    }
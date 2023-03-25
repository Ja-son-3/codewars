// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
    // '! !'                 -> '! !'
    // '123456789'           -> ''
    // 'This looks5 grea8t!' -> 'This looks great!'

// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

//Parameters: Given a string
//Results: Return the given string parameter with all numbers removed.
//Examples:
    // assert.strictEqual(stringClean(""), "")
    // assert.strictEqual(stringClean("! !"), "! !")
    // assert.strictEqual(stringClean("123456789"), "")
    // assert.strictEqual(stringClean("(E3at m2e2!!)"), "(Eat me!!)")
    // assert.strictEqual(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"), "Dsa cdsc csa!!! I Am cool!")
    // assert.strictEqual(stringClean("A1 A1! AAA   3J4K5L@!!!"), "A A! AAA   JKL@!!!")
    // assert.strictEqual(stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@"), "Adgre Asad! AAA fvfdvJKL@")
    // assert.strictEqual(stringClean("Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 "), "Addsadds A  $$sad! AAAe fKL@ ")
    // assert.strictEqual(stringClean("33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 "), "Addsadds A  $$sa!d! A!A!Ae$ f## ")
    // assert.strictEqual(stringClean("My \"me3ssy\" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?"), "My \"messy\" data issues! Will they ever, ever be solved?")
    // assert.strictEqual(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3"), "Why can't we buy the good software? #cheapskates")
//Pseudocode: 
    //1. Use the string split method to seperate each character in the given string into an array of elements.
    //2. Use the filter method to check if the parameter is not a number or a white space, with anything else being removed, effectivly removing all numbers.
    //3. Use the join array method to combine all the individual elements in the array and return the resulting string.
//Time Complexity: O(n) or Linear depending on the length of the given string.

function stringClean(s) {
    return s.split("").filter(e => {if(isNaN(e) || e == " ") return e}).join("")
}
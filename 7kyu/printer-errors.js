// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
    // s="aaabbbbhaijjjm"
    // printer_error(s) => "0/14"

    // s="aaaxbbbbyyhwawiwjjjwwm"
    // printer_error(s) => "8/22"

//Parameters: Given a string parameter.
//Results: Return a string with two numbers,indicating how many characters characters in the given string of the total are not letters between a and m.
//Examples:
    // var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    // Test.assertEquals(printerError(s), "3/56")
//Pseudocode: 
    //1. Use the length method to get the total length of the given string.
    //2. Use the replace method with a regex to filter out all characters in the given string between a and m. Leaving only the errors and using the length method to count the amount of errors.
    //3. Return a string using a template literal with the error number and the total length number divided by a forward slash seperator.
//Time Complexity: O(n) or Linear, depending on the length of the given string.

function printerError(s) {
    const len = s.length;
    const err_len = s.replace(/[a-m]/g, "").length;
    return `${err_len}/${len}`;
}
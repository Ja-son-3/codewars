// Write a simple regex to validate a username. Allowed characters are:
    // lowercase letters,
    // numbers,
    // underscore

// Length should be between 4 and 16 characters (both included).

//Parameters: Given a string parameter, representing a username
//Results: Return a boolean value indicating whether the given string parameter meets the regex validator requirements.
//Examples:
    // assert.strictEqual(validateUsr('asddsa'), true);
    // assert.strictEqual(validateUsr('a'), false);
    // assert.strictEqual(validateUsr('Hass'), false);
    // assert.strictEqual(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
    // assert.strictEqual(validateUsr(''), false);
    // assert.strictEqual(validateUsr('____'), true);
    // assert.strictEqual(validateUsr('012'), false);
    // assert.strictEqual(validateUsr('p1pp1'), true);
    // assert.strictEqual(validateUsr('asd43 34'), false);
    // assert.strictEqual(validateUsr('asd43_34'), true);
//Pseudocode: 
    //1. Use the /^ to start the regex
    //2. Use [] to specify allowed characters inside the brackets, including a-z for lowercase alphabetical character, 0-9 for numerical values and _ for underscore.
    //3. Use {} to specify the allowed number of characters to be between 4 and 16.
    //4. Use $ to end the regex sting.
    //5 Use the test regex method to validate and return true of false depending on whether the username meets the validator.
//Time Complexity:

function validateUsr(username) {
    /*
      - `^`        Start from the beginning of the string.
      - `[]`       Allow any character specified, including...
      - `a-z`      anything from a to z,
      - `0-9`      anything from 0 to 9,
      - `_`        and underscore.
      - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
      - `$`        End the string right after specified amount of allowed characters is given.
    */
    const validator = /^[a-z0-9_]{4,16}$/;
    
    return validator.test(username);
}
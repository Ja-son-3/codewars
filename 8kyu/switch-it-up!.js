// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

//Parameters: Given a integer between 0 and 9.
//Results: Using the switch method return the string word for the corresponding number value given by the parameter.
//Examples:
    // assert.strictEqual(switchItUp(1),"One");
    // assert.strictEqual(switchItUp(3),"Three");
    // assert.strictEqual(switchItUp(5),"Five");
//Pseudocode: 
    //1. Use the switch method and return the corresponding word for the given number.
//Time Complexity: Constant or O(1)

function switchItUp(number){
    switch (number) {
        case 0 : return 'Zero'
        case 1 : return 'One'
        case 2 : return 'Two'
        case 3 : return 'Three'
        case 4 : return 'Four'
        case 5 : return 'Five'
        case 6 : return 'Six'
        case 7 : return 'Seven'
        case 8 : return 'Eight'
        case 9 : return 'Nine'
    }
}
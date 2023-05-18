// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
    // input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
    // output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

//Parameters: Given an array with sub arrays containing numbers. The first number parameter represents age and the second represents handicap
//Results: For each sub array in the given array return Senior if the age is 55 or above and the handicap is over 7 return a string of "Senior", otherwise return "Open"
//Examples:
    // assert.deepEqual(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
    // assert.deepEqual(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open'])
    // assert.deepEqual(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])
//Pseudocode: 
    //1. Use the array map method to iterate over each array item in the given array.
    //2. With each iteration check each sub array at index of 0 to see if they are aged 55 or above and the index of 1 to check if their handicap is over 7. If so return a string of "Senior"
    //3. Otherwise return a string of "Open"
//Time Complexity: O(n) or Linear, depending on the length of the given array.


function openOrSenior(data){
    return data.map(e=>e[0] >= 55 && e[1] > 7 ? e = 'Senior' : 'Open')
}
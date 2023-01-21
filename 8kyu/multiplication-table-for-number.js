//Your goal is to return multiplication table for number that is always an integer from 1 to 10.

//Parameters: Given an integer from 1 to 10
//Results: Return a string containing the multiplication table of the given integer from 1 to 10, with each computation seperated by line breaks.
//Examples: For example, a multiplication table (string) for number == 5 looks like below:
    // 1 * 5 = 5
    // 2 * 5 = 10
    // 3 * 5 = 15
    // 4 * 5 = 20
    // 5 * 5 = 25
    // 6 * 5 = 30
    // 7 * 5 = 35
    // 8 * 5 = 40
    // 9 * 5 = 45
    // 10 * 5 = 50
//Pseudocode: Create a for loop that counts to 10 and with each loop concat it's respective part of the table and adding a new line at the end

function multiTable(number) {
    let result = ''

    for (let i=1;i<=10;i++) {
        result += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`
    }
    return result
  }
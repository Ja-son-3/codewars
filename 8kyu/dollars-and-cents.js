// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

//Parameters: Given a positive or zero number that can have decimals. The parameter represents a monetary amount.
//Results: Return a string with the monetary amount with a currency symbol and to two decimal places.
//Examples:
    // 3 needs to become $3.00
    // 3.1 needs to become $3.10
//Pseudocode: 
    //1. Return a currency symbol as a string to be concatted, which will also convert the rest of the return into a string.
    //2. Use a toFixed method of two in order to set the given parameter to always show two decimal places, even if it is zero.
    //3. Concatenate the currency symbol string and the parameter after applying the toFixed method and return the result.

function formatMoney(amount){
    return '$' + amount.toFixed(2)
}
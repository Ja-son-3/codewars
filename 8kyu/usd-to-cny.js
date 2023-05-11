// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

// Examples (Input -> Output)
    // 15  -> '101.25 Chinese Yuan'
    // 465 -> '3138.75 Chinese Yuan'

// The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

//Parameters: Given a number parameter, representing an amount of money in US currency.
//Results: Return a string indicating the amount of money the given parameter is worth in Chinese Yuan
//Examples:
    // assert.strictEqual(usdcny(15), '101.25 Chinese Yuan');
    // assert.strictEqual(usdcny(465), '3138.75 Chinese Yuan');
//Pseudocode: 
    //1. Use a template literal with interpolation to return the result.
    //2. In the template literal use string interpolation to calculate the rmb value from usd, by multiplying the given parameter by 6.75.
    //3. Use the toFixed() method to set the decimal places to two, even if the value's are zero.
//Time Complexity: O(1) or Constant

function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}
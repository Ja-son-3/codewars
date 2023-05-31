// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:
    //   Let P be the Principal = 1000.00      
    //   Let I be the Interest Rate = 0.05      
    //   Let T be the Tax Rate = 0.18      
    //   Let D be the Desired Sum = 1100.00

    // After 1st Year -->
        //   P = 1041.00
    // After 2nd Year -->
        //   P = 1083.86
    // After 3rd Year -->
        //   P = 1128.30

// Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

//Parameters: Given four number parameters. Representing, the principal amount of money, interest rate gain on principal per year, tax percentage on gains per year and the desired amount to be reached.
//Results: Return the amount of years with the given parameters it would take for the principal amount to reach or surpass the desired amount.
//Examples:
    // assert.strictEqual(calculateYears(1000, 0.05, 0.18, 1100), 3)
    // assert.strictEqual(calculateYears(1000,0.01625,0.18,1200), 14)
    // assert.strictEqual(calculateYears(1000,0.05,0.18,1000), 0)
//Pseudocode: 
    //1. Create a variable to keep count of the amount of years required to reach the desired amount.
    //2. Create a for loop that iterates until the principal amount incremented for each year is equal or greater than the desired amount.
    //3. With each year calculate the new amount of the principal amount in the current year by adding interest gained and subtracting the appropriate percentage in taxes on those gains.
    //4. Also with each iteration increment the value of the counting variable by one.
    //5. After the for loop return the result of the counting variable to obtain the number of years required.
//Time Complexity: O(n) or Linear, depending on the value of the given parameters in determining how many calcuations needs before the desired year is reached.

function calculateYears(principal, interest, tax, desired) {
    let years = 0
    for (let i=0;principal<desired;i++){
      principal=principal+((principal*interest)-(principal*interest*tax))
      years++
    }
  return years
}
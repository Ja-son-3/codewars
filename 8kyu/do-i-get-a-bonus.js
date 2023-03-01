// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

//Parameters: Given two parameters, one representing the salary and another with a boolean value indicting if there is a bonus.
//Results: Return a string value of the salary based on whether bonus is true or not.
//Examples:
    // assert.strictEqual(bonusTime(10000, true), '£100000');
    // assert.strictEqual(bonusTime(25000, true), '£250000');
    // assert.strictEqual(bonusTime(10000, false), '£10000');
    // assert.strictEqual(bonusTime(60000, false), '£60000');
    // assert.strictEqual(bonusTime(2, true), '£20');
    // assert.strictEqual(bonusTime(78, false), '£78');
    // assert.strictEqual(bonusTime(67890, true), '£678900');
//Pseudocode: 
    //1. Use an if statement to check if bonus is true. If true return a value of the euro currency symbol string plus the salary parameter.
    //2. If bonus is false, return a string by concatenating the euro dollar as a string with the salary parameter.
//Time Complexity: Constant or O(1)

function bonusTime(salary, bonus) {
    if (bonus) {
        return `£${salary}`
    }
    return salary
}
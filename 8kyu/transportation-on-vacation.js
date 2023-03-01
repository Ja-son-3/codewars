// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

//Parameters: Given a integer parameter, representing the amount of days the car is rented.
//Results: Return the dollar cost of the car rental depending on the amount of days rented given by the parameter. If it is 7 days or over, apply a $50 discount. If it is over 3 days, but less than 7, apply a $20 discount. If it is less than 3 days there is no discount.
//Examples:
    // assert.strictEqual(rentalCarCost(1), 40);
    // assert.strictEqual(rentalCarCost(2), 80);
    // assert.strictEqual(rentalCarCost(3), 100);
    // assert.strictEqual(rentalCarCost(4), 140);
    // assert.strictEqual(rentalCarCost(5), 180);
    // assert.strictEqual(rentalCarCost(6), 220);
    // assert.strictEqual(rentalCarCost(7), 230);
    // assert.strictEqual(rentalCarCost(8), 270);
    // assert.strictEqual(rentalCarCost(9), 310);
    // assert.strictEqual(rentalCarCost(10), 350); 
//Pseudocode: 
    //1. Use an if statement to check if the given parameter is 7 or greater. If so return the amount of days multipled by 40 minus 50 for the 7 day or over discount.
    //2. Use an if statement to check if the given parameter is 3 or greater. If so return the amount of days multipled by 40 minus 20 for the 3 day, but less than 7 day discount.
    //3. In all other cases return the given parameter multiplied by 40 and return the result.
//Time Complexity: Constant or O(1)

function rentalCarCost(d) {
    if (d >= 7) {
      return d * 40 - 50
    } else if (d >= 3) {
      return d * 40 - 20
    } else {
      return d * 40
    }
}
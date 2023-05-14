// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:
    // cap is the amount of people the bus can hold excluding the driver.
    // on is the number of people on the bus excluding the driver.
    // wait is the number of people waiting to get on to the bus excluding the driver.
    // If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
    // cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
    // cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

//Parameters: Given three parameters, representing the max capacity of the bus, the amount of passengers on the bus and those waiting to get on the bus, respectively.
//Results: Return a value of 0 if the max capacity exceeds those on the bus and those waiting. Otherwise return the excess passengers who are unable to get on the bus.
//Examples:
    // assert.strictEqual(enough(10, 5, 5), 0);
    // assert.strictEqual(enough(100, 60, 50), 10);
    // assert.strictEqual(enough(20, 5, 5), 0);
//Pseudocode: 
    //1. Use an if statement to check if the cap is greater than those waiting on those on the bus. If true return a value of 0.
    //2. Otherwise return a value of the amount of passengers he can't take by adding those waiting and those on the bus and subtracting the max capacity of the bus.
//Time Complexity: Constant or O(1)

function enough(cap, on, wait) {
    if (cap >= on + wait) {
      return 0
    }
    return on + wait - cap
}
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:
    // time = 3 ----> litres = 1
    // time = 6.7---> litres = 3
    // time = 11.8--> litres = 5

//Parameters: Given number parameter, representing the amount of time Nathan has spent cycling.
//Results: Based on the amount of time Nathan as been cycling, given by the time parameter, return the amount of litres Nathan will drink rounded down to the closest integer value.
//Examples:
    // assert.strictEqual(litres(2), 1, 'should return 1 litre');
    // assert.strictEqual(litres(1.4), 0, 'should return 0 litres');
    // assert.strictEqual(litres(12.3), 6, 'should return 6 litres');
    // assert.strictEqual(litres(0.82), 0, 'should return 0 litres');
    // assert.strictEqual(litres(11.8), 5, 'should return 5 litres');
    // assert.strictEqual(litres(1787), 893, 'should return 893 litres');
    // assert.strictEqual(litres(0), 0, 'should return 0 litres');
//Pseudocode: 
    //1. Divide the given time parameter by two to find the amount of litres for the given time.
    //2. Use the Math.floor static method to round the litres value down to the closest integer.
//Time Complexity: constant or 0(1)

function litres(time) {
    return Math.floor(time/2)
}
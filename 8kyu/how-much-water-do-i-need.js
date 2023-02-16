// My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

// For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

// Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.

// My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

// The answer should be rounded to the nearest 2 decimal places.

//Parameters: Given three parameters that can be zero or positive. The three respective values representing water, load and clothes. 
//Results: Return a value representing the amount of water needed to wash the amount of clothes relative to the load and clothes parameters. If there are too much or too little clothes, return the appropriate string.
//Examples:
    // Test.assertEquals(howMuchWater(10,10,21), 'Too much clothes','');
    // Test.assertEquals(howMuchWater(10,10,2), 'Not enough clothes','');
    // Test.assertEquals(howMuchWater(10,11,20), 23.58,'');
    // Test.assertEquals(howMuchWater(50,15,29), 189.87,'');
//Pseudocode: 
    //1. Create an if statement to check if clothes is over 2x the load amount, if so return "Too much clothes"
    //2. Create an if statement to check if clothes is below the load amount, if so return "Not enough clothes"
    //3. Otherwise, calculate the amount of water needed to wash the clothes in the given parameter. Find the amount of water need by subtracting clothes by load to find how many increments of 1 it is above the load.
    //4. For each increment multiple the water amount by 1.1 to account for 10% more compounding or raise 1.1 to the power of which clothes is above the load.
    //5. Multiple the found value with water to find the amount of water needed.
    //6. Increment a + after calculations at the start to convert to a number.
    //7. use the toFixed method and set it to 2 to round and maintain two decimal places, even if the values are zero.
    //8. Return the water value needed to two decimal places.

function howMuchWater(water, load, clothes){
    if (clothes > load * 2) {
        return "Too much clothes"
    } else if (clothes < load) {
        return "Not enough clothes"
    } else {
        return +(water * 1.1 ** (clothes - load)).toFixed(2)
    }
}
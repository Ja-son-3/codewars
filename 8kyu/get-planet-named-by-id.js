// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):
    // 3 --> "Earth"

//Parameters: Given a number representing the planet's position in ascending order from the sun.
//Results: Return the appropriate planet based on the given parameter's number in the order it is from the sun.
//Examples:
    // Test.assertEquals(getPlanetName(2), 'Venus');
    // Test.assertEquals(getPlanetName(5), 'Jupiter');
    // Test.assertEquals(getPlanetName(3), 'Earth');
//Pseudocode: 
    //1. With the given code make each case return it's respective planet instead of setting the value to a variable.
//Time Complexity: Constant or O(1)

function getPlanetName(id){
    switch(id){
      case 1:
        return 'Mercury'
      case 2:
        return 'Venus'
      case 3:
        return 'Earth'
      case 4:
        return'Mars'
      case 5:
        return 'Jupiter'
      case 6:
        return 'Saturn'
      case 7:
        return 'Uranus'
      case 8:
        return 'Neptune'
    }
}
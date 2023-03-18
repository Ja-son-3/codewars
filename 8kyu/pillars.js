// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
    //     number of pillars (≥ 1);
    //     distance between pillars (10 - 30 meters);
    //     width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

//Parameters: Given three number parameters, representing number of pilars, distance between pillars in meters and width of pillars in centimeters.
//Results: Return the distance between the first and last pillar in centimeters (without the width of the first and last pillar)
//Examples:
    //   it("Testing for number of pillars: 1, distance: 10 m and width: 10 cm", function(){
    //     assert.strictEqual(pillars(1, 10, 10) , 0);
    //   });  
    //   it("Testing for number of pillars: 2, distance: 20 m and width: 25 cm", function(){
    //     assert.strictEqual(pillars(2, 20, 25) , 2000);
    //   });
    //   it("Testing for number of pillars: 11, distance: 15 m and width: 30 cm", function(){
    //     assert.strictEqual(pillars(11, 15, 30) , 15270);
    //   });
//Pseudocode: 
    //1. Create an if statement to check if there is 1 pillar or 0, if so return a value of 0.
    //2. Find the number of pillars by subtracting one, to account for starting at pillar one.
    //3. Find the distance by multiplying the result of pillars by distance multipled by 100 to convert from meters to centimeters.
    //4. Add the width of each pillar minus 2 pillars because the first and last are not included.
    //5. Return the result.
//Time Complexity: Constant or O(1)

function pillars(numPill, dist, width) {
    if (numPill <= 1) {
      return 0
    }
    return (numPill-1) * (dist * 100) + ((numPill - 2)*width)
}
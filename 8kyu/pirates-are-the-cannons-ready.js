// Ahoy Matey!

// Welcome to the seven seas.

// You are the captain of a pirate ship.

// You are in battle against the royal navy.

// You have cannons at the ready.... or are they?

// Your task is to check if the gunners are loaded and ready, if they are: Fire!

// If they aren't ready: Shiver me timbers!

// Your gunners for each test case are 2, 3 or 4.

// When you check if they are ready their answers are in a dictionary and will either be: aye or nay

// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

//Parameters: Given an object containing keys and values indicating whether they are ready to fire.
//Results: Return a string indicating whether they are ready to fire or not.
//Examples:
//   it("should Fire on aye", function(){
//     assert.strictEqual(cannonsReady(a), 'Fire!');
//   });
//   it("should Shiver me timbers on nay", function(){
//     assert.strictEqual(cannonsReady(b), 'Shiver me timbers!');
//   });
//Pseudocode: 
    //1. Create a for in loop to iterate over each key in the given object.
    //2. With each iteration check if the current key has a value of 'nay'. If it does return a string of "Shiver me timbers!"
    //3. Otherwise return a string of "Fire!"
//Time Complexity: O(n) or Linear, depending on the length of the given object.

const cannonsReady = (gunners) => {
    for (const i in gunners) {
      if (gunners[i] === 'nay') {
        return "Shiver me timbers!"
      }
    }
    return "Fire!"
}
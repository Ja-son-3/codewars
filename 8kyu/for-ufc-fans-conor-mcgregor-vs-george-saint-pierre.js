// This is a beginner friendly kata especially for UFC/MMA fans.

// It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

// If the winner is George Saint Pierre he will obviously say:
    // "I am not impressed by your performance."

// If the winner is Conor McGregor he will most undoubtedly say:
    // "I'd like to take this chance to apologize.. To absolutely NOBODY!"

// Good Luck!

// Note
// The given name may varies in casing, eg., it can be "George Saint Pierre" or "geOrGe saiNT pieRRE". Your solution should treat both as the same thing (case-insensitive).

//Parameters: Given a string parameter of conor mcgregor of george saint pierre, indicating the winner of a fight
//Results: Return a string of what will be said during the post fight interview by the winner, given by the parameter.
//Examples:
    // Test.assertEquals(quote('george saint pierre'), "I am not impressed by your performance.")
    // Test.assertEquals(quote('conor mcgregor'), "I'd like to take this chance to apologize.. To absolutely NOBODY!")
    // Test.assertEquals(quote('George Saint Pierre'), "I am not impressed by your performance.")
    // Test.assertEquals(quote('Conor McGregor'), "I'd like to take this chance to apologize.. To absolutely NOBODY!")
//Pseudocode: 
    //1. Use the if statement to check if the given parameter is conor mcgregor. Use the toLowerCase() method to account for capitalizations. If true return a string of "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    //2. Otherwise return a string of "I am not impressed by your performance."
//Time Complexity: O(1) or Constant

var quote = function(fighter) {
    if (fighter.toLowerCase() === "conor mcgregor") return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    return "I am not impressed by your performance."
  };
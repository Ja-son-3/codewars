// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".

//Parameters: Given 5 parameters. Given two parameters representing distance, one for your distance from the pontoon and another for the shark's distance. Another two parameters represent the swim speed of you and the swim speed of the shark. The last parameter represents whether a dolphin is present.
//Results: Return a string of "Alive!" or "Shark Bait!" depending on whether you or the shark get to the pontoon first.
//Examples:
    // Test.assertEquals(shark(12, 50, 4, 8, true), "Alive!");
    // Test.assertEquals(shark(7, 55, 4, 16, true), "Alive!");
    // Test.assertEquals(shark(24, 0, 4, 8, true), "Shark Bait!");
//Pseudocode: 
    //1. Find the time it takes for you to get to the pontoon by the distance to the pontoon by your swim speed.
    //2. Use an if statement to check if there is a dolphin.
    //3. If there is a dolphin calculate the time it takes the shark to get to the pontoon by dividing the shark's distance to the pontoon by it's speed divided by two.
    //4. If there is no dolphin calculate the time it takes the shark to get to the pontoon by dividing the shark's distance to the pontoon by it's speed.
    //5. If your time is lower than the shark's time, return "Alive!", otherwise return "Shark Bait!"

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let yourTime = pontoonDistance / youSpeed
    let sharkTime = (dolphin) ? (sharkDistance / (sharkSpeed/2)) : sharkDistance / sharkSpeed
    if (yourTime < sharkTime) {
        return "Alive!"
    } else {
        return "Shark Bait!"
    }
}
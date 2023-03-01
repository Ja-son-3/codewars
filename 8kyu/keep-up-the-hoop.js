// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
    // If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
    // If he doesn't get 10 hoops, return the string "Keep at it until you get it".

//Parameters: Given a integer parameter, representing the amount of times the hula hoop has gone around Alex.
//Results: Return the appropriate string depending on if the given parameter is 10 or over.
//Examples:
    // Test.assertEquals(hoopCount(3),"Keep at it until you get it" ) 
    // Test.assertEquals(hoopCount(11),"Great, now move on to tricks" )
//Pseudocode: 
    //1. Use an if statement to check if the given parameter is 10 or greater. If so return a string of "Great, now move on to tricks"
    //2. Otherwise return a string of "Keep at it until you get it"
//Time Complexity: Constant or O(1)

function hoopCount (n) {
    if (n >= 10) {
        return "Great, now move on to tricks"
    } 
    return "Keep at it until you get it"
}
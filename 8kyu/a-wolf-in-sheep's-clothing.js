// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

//Parameters: 
//Results: 
//Examples:
    // Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
    // Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
    // Input: ["sheep", "sheep", "wolf"]
    // Output: "Pls go away and stop eating my sheep"
//Pseudocode: 
    //1. Use an if statement to check if "wolf" is the last item in the given queue array. If so return "Please go away and stop eating my sheep"
    //2. If not find the position of the wolf in the array using a indexOf method.
    //3. Return "Oi! Sheep number N! You are about to be eaten by a wolf!", where N is the position of the sheep in front of the wolf, found by subtracting the length of the array by one to account for arrays starting at an index or 0 and by the index position of the wolf to get the numbered position of the sheep.

function warnTheSheep(queue) {
    if (queue[queue.length - 1] === "wolf") {
        return "Pls go away and stop eating my sheep"
    }
    let wolfPos = queue.indexOf('wolf')
    return `Oi! Sheep number ${queue.length-1 - wolfPos}! You are about to be eaten by a wolf!`
    
}

// function warnTheSheep(queue) {
//     if (queue[queue.length - 1] === "wolf") {
//         return "Pls go away and stop eating my sheep"
//     }
//     for (i=queue.length -2; i >= 0; i--) {
//          if (queue[i] === "wolf") {
//             return `Oi! Sheep number ${queue.length-i-1}! You are about to be eaten by a wolf!`
//          }
//     }
// }
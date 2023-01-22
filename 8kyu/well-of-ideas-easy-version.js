// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//Parameters: given an array of x containing "good" ideas and "bad" ideas
//Results: return a result depending on the number of "good" ideas. If one or two "good" ideas return 'Publish!', if there are more than 2 return 'I small a series!' If there are no "good" ideas return 'Fail!'
//Examples:
    // assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
    // assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
    // assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
//Pseudocode: 
    //1. Create a new array by filtering the array of x for 'good'
    //2. Get the length of the new array by using length to count how many 'good' there were in the array
    //3. Return either 'Publish!', 'I smell a series!' or 'Fail!' depending on the amount of 'good' ideas


function well(x){
    let count = x.filter(good => good === 'good').length
    if (count === 0) {
        return 'Fail!'
    } else if (count === 1 || count === 2) {
        return 'Publish!'
    } else {
        return 'I smell a series!'
    }
}
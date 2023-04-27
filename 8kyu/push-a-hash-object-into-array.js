// You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!

//Parameters: No parameters.
//Results: Push an object into an array.
//Examples:
    //   it ("should has a value", function(){
    //     assert.isNotEmpty(items, 'The array is still empty')
    //   });
    //   it ("should has only one value", function(){
    //     assert.lengthOf(items, 1, 'The array contains too many values')
    //   });
    //   it ("should has the correct value", function(){
    //     assert.deepEqual(items, [{a: "b", c: "d"}], 'The array does not contain the correct value"')
//Pseudocode: 
    //1. Encase the push method in parenthesis
//Time Complexity: Constant or O(1)

items = []
items.push({a: "b", c: "d"})
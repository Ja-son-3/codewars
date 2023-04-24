// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers. 

//Parameters: Given a number parameter.
//Results: Return a string of alternating 1's and 0's starting from 1 with the length equal to the given number parameter.
//Examples:
    // it('Should return a string', function() {
    //     Test.assertEquals(typeof stringy(3), 'string',
    //     'Make sure it\'s a string not a number (the function is called stringy after all!)');
    //   });

    //   it('Should start with a 1', function() {
    //     Test.assertEquals(stringy(3)[0], '1',
    //     'Whoops your string doesnt start with a 1?');
    //   });  

    //   it('Should have the correct length', function() {  
    //     for(let i = 0; i < 10; ++i){
    //       let parameter = (Math.random() * 50 + 1) | 0;
    //       Test.assertEquals(stringy(parameter).length, parameter, 'Wrong length on ' + parameter);
//Pseudocode: 
    //1. Create an empty str to contain the return string.
    //2. Create a for loop that loops size number of times and with each loop adds a string of 1 or 0 to the new string variable, starting with 1.
    //3. Return the string variable.
//Time Complexity: O(n) or Linear, depending on the value of the given number parameter.

function stringy(size) {
    let str = ''
    for (let i = 0; i < size;i++) {
      if (i % 2 === 0) {
        str += '1'
      } else {
        str += '0'
      }
    }
    return str
}
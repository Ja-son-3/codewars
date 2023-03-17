// There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.

//Parameters: No parameters.
//Results: Freeze the object MrFreeze, so that it's properties cannot be changed.
//Examples:
    // assert.strictEqual(MrFreeze.speak(), "hi", 'MrFreeze was able to be modified')
    // assert.strictEqual(Object.isFrozen(MrFreeze), true, 'MrFreeze is not frozen')
//Pseudocode: 
    //1. Use the Object.freeze() static method to freeze an existing object, preventing changes to be made to the object.
//Time Complexity:

Object.freeze(MrFreeze)
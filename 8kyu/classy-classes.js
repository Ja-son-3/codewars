// Classy Classes
// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

// Task
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

//Parameters: Given two parameters, representing a person's name and age.
//Results: Return a string tied to the property of info, which returns a string that returns the name and age of the person.
//Examples:
    // var john = new Person('john', 34)
    // Test.assertEquals(john.info, 'johns age is 34')
//Pseudocode: 
    //1. create a constructor that takes two parameters, which sets the values of name and age.
    //2. Create a property or function that returns a string incorporating the name and age property.
//Time Complexity: O(1) or Constant

class Person {
    constructor(a,b) {
        this.name = a
        this.age = b
        this.info = `${this.name}s age is ${this.age}`
    }
}
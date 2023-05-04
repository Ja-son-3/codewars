// We want to create a constructor function 'NameMe', which takes first name and last name as parameters. The function combines the first and last names and saves the value in "name" property.

// We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible. All the properties should be accessible. Can you find what's wrong with it? A test fixture is also available
    // function NameMe(first, last) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     return {name: this.firstName + ' ' + this.lastName};
    // }

    // var n = new NameMe('John', 'Doe');
    // n.firstName //Expected: John
    // n.lastName //Expected: Doe
    // n.name //Expected: John Doe

//Parameters: Given two string parameters, representing the first and last name of a person.
//Results: call the name propety to return a string that includes the firstName property and lastName property from the same object.
//Examples:
    // Test.expect((typeof n.firstName != undefined && n.firstName == "John"), "Verifying First name. Object returned should contain the firstname: John");
    // Test.expect((typeof n.lastName != undefined && n.lastName == "Doe"), "Verifying Last name. Object returned should contain the lastname: Doe");
    // Test.expect((typeof n.name != undefined && n.name == "John Doe"), "Verifying full name. Object returned should contain the full name: John Doe");
//Pseudocode: 
    //1. Remove the return statement and object curly braces incasing the name property.
    //2. change name to this.name and set it equal to this.firstName + ' ' + this.lastName
//Time Complexity: O(1) or Constant

//Given
// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     return {name: this.firstName + ' ' + this.lastName};
// }

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}
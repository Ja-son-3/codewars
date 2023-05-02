// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```
// Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

//Parameters: Given two string parameters.
//Results: Return a string of "(obj) are (feature)" using a template literal and string interpolation.
//Examples:
    // Test.assertEquals(TempleStrings("Animals","Good"), 'Animals are Good')
//Pseudocode: 
    //1. Return a string of "(obj) are (feature)" using a template literal and string interpolation.
//Time Complexity: O(1) or Constant

var TempleStrings = function(obj, feature) {
    return `${obj} are ${feature}`
}
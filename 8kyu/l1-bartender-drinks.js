// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
    // "Jabroni"	"Patron Tequila"
    // "School Counselor"	"Anything with Alcohol"
    // "Programmer"	"Hipster Craft Beer"
    // "Bike Gang Member"	"Moonshine"
    // "Politician"	"Your tax dollars"
    // "Rapper"	"Cristal"
    // anything else	"Beer"

// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

//Parameters: Given a string param, representing a person's profession.
//Results: Respective of the given profession parameter return the type of drink they would drink as a string.
//Examples:
    // Test.assertEquals(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
    // Test.assertEquals(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
    // Test.assertEquals(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
    // Test.assertEquals(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
    // Test.assertEquals(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
    // Test.assertEquals(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
    // Test.assertEquals(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
    // Test.assertEquals(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");
//Pseudocode: 
    //1. Set all values of the given parameter to lower case using the string to lower case method.
    //2. Use an if statement to check if the given parameter has a specific respective response.
    //3. If not return a string of "Beer"
//Time Complexity: O(1) or Constant

function getDrinkByProfession(param){
    param = param.toLowerCase()
    
    if (param === "jabroni") {
          return "Patron Tequila"
      } else if (param === "school counselor") {
          return "Anything with Alcohol"
      } else if (param === "programmer") {
          return "Hipster Craft Beer"
      } else if (param === "bike gang member") {
          return "Moonshine"
      } else if (param === "politician") {
          return "Your tax dollars"
      } else if (param === "rapper") {
          return "Cristal"
      } else {
          return "Beer"
      }
}
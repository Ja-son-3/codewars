// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:
// celsius = (fahrenheit - 32) * (5/9)

//Parameters: Given a number value, representing fahrenheit.
//Results: Given the rahrenheit parameter, return it's equivalent value in celcius in the appropriate string
//Examples:
    // assert.strictEqual(weatherInfo(50), '10 is above freezing temperature')
    // assert.strictEqual(weatherInfo(23),  '-5 is freezing temperature')
//Pseudocode: 
    //1. Wrap the if statement's to curly braces.
    //2. Set c < 0 to freezing temperature instead of c > 0
    //3. Correct spelling in convertToCelsius function from tempertur to temperature
    //4. in convertToCelsius function, return celsius instead of temperature
    //5. Fix fahrenheit to celcius calculation in convertToCelsius function to (temperature - 32)  * (5/9)

function weatherInfo (temp) {
    let c = convertToCelsius(temp)
    if (c < 0) {
      return (c + " is freezing temperature")
    } else {
      return (c + " is above freezing temperature")
    }
}
  
function convertToCelsius (temperature) {
    var celsius = (temperature - 32) * (5/9)
    return celsius
}
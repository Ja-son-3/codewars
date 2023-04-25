// Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

// Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

// Make sure to round off the result to two decimal points.

// Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres

//Parameters: Given one integer parameter, representing miles per gallon
//Results: Convert the given miles per gallon value to an equivalent kilometeres per litre value.
//Examples:
    // Test.assertEquals(converter(10), 3.54)
    // Test.assertEquals(converter(20), 7.08)
    // Test.assertEquals(converter(30), 10.62)
//Pseudocode: 
    //1. Find the kilometers per gallon value by multiplying mpg by 1.609344
    //2. Find the kilometers per liter value by dividing kilometers per gallon by 4.54609188
    //3. Return the kilometers per liter value rounded to two decimal places using the toFixed() method.
//Time Complexity: Constant or O(1)

function converter (mpg) {
    kmPerGallon = mpg * 1.609344
    kpl = kmPerGallon/4.54609188
}
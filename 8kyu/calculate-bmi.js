// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//Parameters: Given two floating number parameters that represent weight and height.
//Results: Given the two weight and height parameters, return a value representing their body mass index as a string.
//Examples:
    // Test.assertEquals(bmi(80, 1.80), "Normal");
//Pseudocode: 
    //1. Calculate the BMI index value by using the bmi = weight / height2 formula.
    //2. Create an if statement that checks what category the bmi value index is in and return the appropriate string respective to its value.
//Time Complexity: Constant or 0(1)

function bmi(weight, height) {
    let bmiValue = weight/(height * height)
    if (bmiValue <= 18.5) {
      return "Underweight"
    } else if (bmiValue <= 25) {
      return "Normal"
    } else if (bmiValue <= 30) {
      return "Overweight"
    } else {
      return "Obese"
    }
}
// n a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
//     At the end of the 2nd year there will be: 
//     1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

//     At the end of the 3rd year there will be:
//     1141 + 1141 * 0.02 + 50 => 1213

//     It will need 3 entire years.

// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
    // nb_year(1500, 5, 100, 5000) -> 15
    // nb_year(1500000, 2.5, 10000, 2000000) -> 10

// Note:
    // Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

//Parameters: Given 4 number parameters, representing the starting population, percentage of population increase per year, additional new inhabitants per year from outside and the target population.
//Results: Return the amount of years it would take for the town to reach the target population with the given parameters.
//Examples:
    // Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
    // Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
    // Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94); 
//Pseudocode: 
    //1. Create a for loop that loops while the value of the current population is less than the target population.
    //2. With each iteration calculate the population growth of the next year but adding the current population by the percent increase given as a parameter and adding the additional inhabitants that come from outside.
    //3. Use the Math.floor method to round down, account for floating numbers or partial persons.
    //4. With each iteration increase the value of n by 1, which represents the amount of years elapsed.
    //5. Return n after the for loop to get the number of years
//Time Complexity: O(n) or Linear, depending on how many loops to reach the population target.

function nbYear(p0, percent, aug, p) {
  for (let n = 0; p0 < p; n++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
  return n
}
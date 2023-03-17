// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

//Parameters: Given one string parameter, representing the content of a billboard ad and a number parameter, representing the price per character on the billboard.
//Results: Return the dollar cost value of how much the billboard will cost without using the multiplication operator.
//Examples:
    // Test.assertEquals(billboard("Jeong-Ho Aristotelis"), 600);
    // Test.assertEquals(billboard("Abishai Charalampos"), 570);
    // Test.assertEquals(billboard("Idwal Augustin"), 420);
    // Test.assertEquals(billboard("Hadufuns John",20), 260);
    // Test.assertEquals(billboard("Zoroaster Donnchadh"), 570);
    // Test.assertEquals(billboard("Claude Miljenko"), 450);
    // Test.assertEquals(billboard("Werner Vígi",15), 165);
    // Test.assertEquals(billboard("Anani Fridumar"), 420);
    // Test.assertEquals(billboard("Paolo Oli"), 270);
    // Test.assertEquals(billboard("Hjalmar Liupold",40), 600);
    // Test.assertEquals(billboard("Simon Eadwulf"), 390);
//Pseudocode: 
    //1. Create a new number variable to be returned as the cost for the billboard.
    //2. Create a for loop that iterates price amount of times and with each iteration of the loop add the length value of the billboard to the cost variable.
    //3. Return the cost variable.
//Time Complexity: Linear or O(n), depending the on the length or price of the billboard.

function billboard(name, price = 30){
    let cost = 0
    for (let i=1;i<=price;i++) {
      cost += name.length
    }
    return cost
}
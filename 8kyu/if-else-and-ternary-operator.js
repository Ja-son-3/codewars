//Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
// number of hotdogs	price per unit (cents)
    // n < 5	            100
    // n >= 5 and n < 10	95
    // n >= 10	            90
// You can use if..else or ternary operator to complete it.

//Parameters: Given a positive whole integer representing the quantity of hot dogs purchased
//Results: Return the total sale price of the hot dogs, given the quantity parameter.
//Examples:
    // assert.strictEqual(saleHotdogs(  1),  100);
    // assert.strictEqual(saleHotdogs(  4),  400);
    // assert.strictEqual(saleHotdogs(  5),  475);
    // assert.strictEqual(saleHotdogs(  9),  855);
    // assert.strictEqual(saleHotdogs( 10),  900);
    // assert.strictEqual(saleHotdogs(100), 9000);
//Pseudocode: 
    //1. Create a ternary operator that returns the sale price of all the hot dogs.

function saleHotdogs(n){
    return (n < 5) ? n * 100 : (n < 10) ? n * 95 : n * 90
}
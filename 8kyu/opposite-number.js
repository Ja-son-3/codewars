// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34
  
//Parameters: Given a parameter of zero or positive/negative integer or floating-point number.
//Results: Return the opposite value of the given parameter. If it is positive, return the same value as negative. If negative, return the same value as a positive. If given zero, return zero.
//Examples:
// it('should return -1', () => {
//     assert.strictEqual(opposite(1), -1);
//   });
//   it('should return 0', () => {
//     assert.strictEqual(opposite(0), 0);
//   });
//   it('should return -4.25', () => {
//     assert.strictEqual(opposite(4.25), -4.25);
//   });
//   it('should return -3.3333333', () => {
//     assert.strictEqual(opposite(3.3333333), -3.3333333);
//   });
//   it('should return 12525220.3325', () => {
//     assert.strictEqual(opposite(-12525220.3325), 12525220.3325);
//   });
//   it('should return 5', () => {
//     assert.strictEqual(opposite(-5), 5);
//   });
//Pseudocode: 
    //1. Use the unary negation operator built into JS to return the opposite result. Add a minus sign (-) to the beginning given parameter and return the result.

function opposite(number) {
    return -number
}
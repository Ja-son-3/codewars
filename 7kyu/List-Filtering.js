// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

Solution
function filter_list(arr) {
    return arr.filter(item => typeof item === 'number')
  }
  
// function filter_list(arr) {
//   let onlyNumber = arr.filter(function(item) {
//     return typeof item === "number"
//   })
//   return onlyNumber
// }
  
// function filter_list(arr) {
//   let onlyNumber = [];
//   for (let i=0;i<arr.length;i++) {
//     if (typeof(arr[i]) === 'number') {
//       onlyNumber.push(arr[i])
//     }
//   }
//   return onlyNumber;
// }
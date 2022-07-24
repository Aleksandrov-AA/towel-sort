
// You should implement your task here.

module.exports = function towelSort (matrix=[]) {
  let result = [];
  let m = 0;
  let i = 0;
  let arr1 = [];
  let arr2 = [];

  for (i = 0; i < matrix.length; i ++) {
    m += 1;
    if (m % 2 !== 0) {
      arr1 = [...matrix[m-1]];      
      arr1 = arr1.sort((a,b) => a - b);      
      result = [...result, ...arr1];
    } else {
      arr2 = [...matrix[m-1]];      
      arr2 = arr2.sort((a,b) => b - a);      
      result = [...result, ...arr2,];      
    }
  }
  
  return result;
}

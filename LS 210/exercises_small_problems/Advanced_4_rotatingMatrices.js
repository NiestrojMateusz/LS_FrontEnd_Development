// Write a function that takes an arbitrary matrix and rotates it 90 degrees clockwise as shown above.

// Rules: -First input matrix row becomes output matrix last column
//        -Matrix is an array with nested arrays, that nested arrays are rows of matrx
//        -Nested arrays have same lengths
//        -Column of matrix is built by elements with same index from row arrays
//        -Output matrix has number of column equal to number of input matrix rows
//        -Output matrix has nmber of rows equal to length of matrix array
//        -Elements from last nested arrays becomes first elements of each nested output arrays

// Algorithm: 
//        -Create an result array with length equal to length of nested array length
//        -Fill result arrays with empty arrays
//        -For input array lenght-1 to 0 take nested arrays
//          - take elements of current array and push its elements to every nested array of result matrix 
//            - take first number and push it to result nested first array 
//            - take second array and push it to result nested second array
// 
function rotate90(matrix) {
  var result = [];


 for (var row = 0; row < matrix[0].length; row++) {
    result.push([]);
  }

  for (var i = matrix.length-1; i >= 0; i--) {
    for (var j = 0; j < matrix[i].length; j++) {
      result[j].push(matrix[i][j]);
    }
  }

  return result;
}

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8]
]

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3); // matrix2
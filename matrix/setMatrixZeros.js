/*
  Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

  Time: O(nm) // Space: 0(1)
*/

var setZeroes = function(matrix) {

  for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
          if (matrix[row][col] === 0) {
              matrix[row][col] = true;
          }
      }
  }

  for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
          if (matrix[row][col] === true) {
              setRowAndColToZero(row, col, matrix);
          }
      }
  }

};

function setRowAndColToZero(row, col, matrix) {
  for (let i = 0; i < matrix[row].length; i++) {
      if (matrix[row][i] === true && i !== col) continue;
      matrix[row][i] = 0;
  }
  for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][col] === true && i !== row) continue;
      matrix[i][col] = 0;
  }
}
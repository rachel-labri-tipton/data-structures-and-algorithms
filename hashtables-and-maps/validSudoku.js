function isValidSudoku(board) {
  // Create sets for each row, column, and 3x3 sub-box
  const rows = Array(9).fill().map(() => new Set());
  const cols = Array(9).fill().map(() => new Set());
  const boxes = Array(9).fill().map(() => new Set());
  
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          const num = board[i][j];
          if (num === '.') continue;
          
          // Calculate box index
          const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
          
          // Check if number already exists in row, column, or box
          if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
              return false;
          }
          
          // Add number to sets
          rows[i].add(num);
          cols[j].add(num);
          boxes[boxIndex].add(num);
      }
  }
  
  return true;
}

// Example usage:
const board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(board)); // Output: true

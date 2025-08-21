function countIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  
  const directions = [
      [1, 0], // down
      [-1, 0], // up
      [0, 1], // right
      [0, -1] // left
  ];
  
  function dfs(row, col) {
      // Mark current position as visited
      visited[row][col] = true;
      for (let [dx, dy] of directions) {
          const newRow = row + dx;
          const newCol = col + dy;
          if (
              newRow >= 0 && newRow < m &&
              newCol >= 0 && newCol < n &&
              !visited[newRow][newCol] &&
              grid[newRow][newCol] === '1'
          ) {
              dfs(newRow, newCol);
          }
      }
  }
  
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === '1' && !visited[i][j]) {
              // Found a new island
              count++;
              dfs(i, j);
          }
      }
  }
  
  return count;
}


// ...existing code...

// Example grid: 1s are land, 0s are water
const grid1 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '1'],
  ['0', '0', '1', '0', '1'],
  ['0', '0', '0', '1', '1']
];

// Should return 3 islands
console.log('Test 1:', countIslands(grid1) === 3 ? 'PASS' : 'FAIL');

// Another test: all water
const grid2 = [
  ['0', '0', '0'],
  ['0', '0', '0'],
  ['0', '0', '0']
];

// Should return 0 islands
console.log('Test 2:', countIslands(grid2) === 0 ? 'PASS' : 'FAIL');

// Another test: all land
const grid3 = [
  ['1', '1'],
  ['1', '1']
];

// Should return 1 island
console.log('Test 3:', countIslands(grid3) === 1 ? 'PASS' : 'FAIL');
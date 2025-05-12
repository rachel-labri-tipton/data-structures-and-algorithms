/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function (grid) {
  const ROWS = grid.length
  const COLS = grid[0].length
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  let timestamp = 2


  const runRottingProcess = (timestamp) => {
    let shouldContinue = false
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (grid[row][col] === timestamp) {
          for (const d of directions) {
            const neighborRow = row + d[0]
            const neighborCol = col + d[1]
            if (neighborRow >= 0 && neighborRow < ROWS && neighborCol >= 0 && neighborCol < COLS) {
              if (grid[neighborRow][neighborCol] === 1) {
                grid[neighborRow][neighborCol] = timestamp + 1
                shouldContinue = true
              }
            }
          }
        }
      }
    }
    return shouldContinue

  }
  while (runRottingProcess(timestamp)) {
    timestamp++
  }
  for (const row of grid) {
    for (const cell of row) {
      if (cell === 1) {
        return -1
      }
    }
  }
  return timestamp - 2
}

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))
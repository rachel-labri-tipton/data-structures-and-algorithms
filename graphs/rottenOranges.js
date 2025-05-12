// Rotten Oranges problem

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let queue = []; // Use a standard array as a queue
    let freshOranges = 0;
    const ROWS = grid.length;
    const COLS = grid[0].length;

    // Step 1: Build the initial set of rotten oranges
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]); // Push as an array
            } else if (grid[r][c] === 1) {
                freshOranges++;
            }
        }
      console.log(queue)
    }

    // Mark the round/level, using a special value.  We can use null
    queue.push(null);

    // Step 2: Start the rotting process via BFS
    let minutesElapsed = -1;
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    while (queue.length > 0) {
        const cell = queue.shift(); // Dequeue from the front

        if (cell === null) {
            // We finish one round of processing
            minutesElapsed++;
            if (queue.length > 0) {
              queue.push(null);
              console.log(queue)
            }
        } else {
            const row = cell[0];
            const col = cell[1];

            for (const d of directions) {
                const neighborRow = row + d[0];
                const neighborCol = col + d[1];

                if (neighborRow >= 0 && neighborRow < ROWS && neighborCol >= 0 && neighborCol < COLS) {
                    if (grid[neighborRow][neighborCol] === 1) {
                        grid[neighborRow][neighborCol] = 2;
                        freshOranges--;
                        queue.push([neighborRow, neighborCol]);
                    }
                }
            }
        }
    }
    return freshOranges === 0 ? minutesElapsed : -1;
};

console.log(orangesRotting([[2, 1, 1], [0, 0, 1], [2, 1, 1]]))
console.log(orangesRotting([[2,1,1,2],[1,1,2,0],[0,1,2,1]]))
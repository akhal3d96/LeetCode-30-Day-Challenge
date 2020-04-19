/** @param {character[][]} grid */
/** @param {number} i */
/** @param {number} j */
/** @return {number} island */
function BFS(grid, i, j, visited) {
  // console.log(grid)
  if(i >= grid.length ||
     i < 0 ||
     j >= grid[i].length ||
     j < 0 ||
     visited[i][j] ||
     grid[i][j] == '0'
     ) return

  visited[i][j] = true

  BFS(grid, i+1, j, visited)
  BFS(grid, i-1, j, visited)
  BFS(grid, i, j+1, visited)
  BFS(grid, i, j-1, visited)
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let numOfIslands = 0
  const visited = grid.map(e => Array(e.length).fill(false) )
  grid.forEach((row, i) => row.forEach((e, j) => {
    if(e == '1' && !visited[i][j]) {
      numOfIslands++
      BFS(grid, i, j, visited)
    }
  }))

  return numOfIslands
};

const num = numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
])

console.log(num)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if(!grid.length) return 0

  const mem = Array(grid.length).fill(null).map( arr => Array(grid[0].length).fill(0))

  grid.forEach( (row, i) => row.forEach((e, j) => {
    mem[i][j] += e
    if(i > 0 && j > 0){ mem[i][j] += Math.min(mem[i-1][j], mem[i][j-1])}
    else if (i > 0){ mem[i][j] += mem[i-1][j]}
    else if (j > 0) { mem[i][j] += mem[i][j-1]}

  }))
  return mem[grid.length-1][grid[0].length-1]
};

console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]))
export function generateRandomGrid(dimension) {
  let grid = [];

  for (let r = 0; r < dimension; r++) {
    let currentRow = [];
    for (let c = 0; c < dimension; c++) {

      let value = Math.random() < 0.25 ? 1 : 0;
      currentRow.push(value);
    }
    grid.push(currentRow);
  }

  let startRow = Math.floor(Math.random() * dimension);
  let startCol = Math.floor(Math.random() * dimension);
  grid[startRow][startCol] = 2;

  let endRow, endCol;
  do {
    endRow = Math.floor(Math.random() * dimension);
    endCol = Math.floor(Math.random() * dimension);
  } while (endRow === startRow && endCol === startCol);

  grid[endRow][endCol] = 3;

  return grid;
}
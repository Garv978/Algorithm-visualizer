import { sleep } from "../../utils/sleep";

export async function DFS(
  source,
  destination,
  dimension,
  grid,
  setGrid,
  speedRef,
  stopTraversal,
  runID,
  currentRunID,
) {
  if (!source || !destination) return;

  const visited = Array.from({ length: dimension }, () =>
    Array(dimension).fill(false)
  );

  const parent = Array.from({ length: dimension }, () =>
    Array(dimension).fill(null)
  );

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function isValid(r, c) {
    return (
      r >= 0 &&
      c >= 0 &&
      r < dimension &&
      c < dimension &&
      !visited[r][c] &&
      grid[r][c] !== 1
    );
  }

  async function dfs(r, c) {
    if (stopTraversal.current || runID.current !== currentRunID)
      return false;

    if (!isValid(r, c)) return false;

    visited[r][c] = true;

    // Visiting color
    setGrid((prev) => {
      const newGrid = prev.map((row) => row.slice());
      if (newGrid[r][c] !== 2 && newGrid[r][c] !== 3) {
        newGrid[r][c] = 4;
      }
      return newGrid;
    });

    await sleep(speedRef.current);

    // Destination found
    if (r === destination[0] && c === destination[1]) {
      return true;
    }

    for (let [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (isValid(nr, nc)) {
        parent[nr][nc] = [r, c];
        if (await dfs(nr, nc)) return true;
      }
    }

    // Backtrack color
    setGrid((prev) => {
      const newGrid = prev.map((row) => row.slice());
      if (newGrid[r][c] !== 2 && newGrid[r][c] !== 3) {
        newGrid[r][c] = 5;
      }
      return newGrid;
    });

    await sleep(speedRef.current);

    return false;
  }

  const found = await dfs(source[0], source[1]);

  // Draw final path
  if (found) {
    let cur = destination;

    while (cur) {
      const [r, c] = cur;

      setGrid((prev) => {
        const newGrid = prev.map((row) => row.slice());
        if (newGrid[r][c] !== 2 && newGrid[r][c] !== 3) {
          newGrid[r][c] = 6;
        }
        return newGrid;
      });

      await sleep(30);
      cur = parent[r][c];
    }
  }
}
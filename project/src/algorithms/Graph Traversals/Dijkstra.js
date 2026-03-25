import { sleep } from "../../utils/sleep";

export async function Dijkstra(
  source,
  destination,
  dimension,
  grid,
  setGrid,
  speedRef,
  stopTraversal,
  runID,
  currentRunID
) {
  if (!source || !destination) return;

  const dist = Array.from({ length: dimension }, () =>
    Array(dimension).fill(Infinity)
  );

  const parent = Array.from({ length: dimension }, () =>
    Array(dimension).fill(null)
  );

  const visited = Array.from({ length: dimension }, () =>
    Array(dimension).fill(false)
  );

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  dist[source[0]][source[1]] = 0;

  while (true) {
    if (stopTraversal.current || runID.current !== currentRunID) return;

    let minDist = Infinity;
    let node = null;

    // Find minimum distance node
    for (let r = 0; r < dimension; r++) {
      for (let c = 0; c < dimension; c++) {
        if (!visited[r][c] && dist[r][c] < minDist) {
          minDist = dist[r][c];
          node = [r, c];
        }
      }
    }

    if (!node) break;

    const [r, c] = node;
    visited[r][c] = true;

    // Visiting color
    setGrid((prev) => {
      const newGrid = prev.map((row) => row.slice());
      if (newGrid[r][c] !== 2 && newGrid[r][c] !== 3)
        newGrid[r][c] = 4;
      return newGrid;
    });

    await sleep(speedRef.current);

    if (r === destination[0] && c === destination[1]) break;

    for (let [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < dimension &&
        nc < dimension &&
        grid[nr][nc] !== 1
      ) {
        let weight = grid[nr][nc] === 6 ? 5 : 1;

        if (dist[r][c] + weight < dist[nr][nc]) {
          dist[nr][nc] = dist[r][c] + weight;
          parent[nr][nc] = [r, c];
        }
      }
    }
  }

  // Draw shortest path
  let cur = destination;
  while (cur) {
    const [r, c] = cur;

    setGrid((prev) => {
      const newGrid = prev.map((row) => row.slice());
      if (newGrid[r][c] !== 2 && newGrid[r][c] !== 3)
        newGrid[r][c] = 6;
      return newGrid;
    });

    await sleep(30);
    cur = parent[r][c];
  }
}
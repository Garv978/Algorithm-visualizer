import { sleep } from "../../utils/sleep";

export async function BFS(
  source,
  destination,
  dimension,
  grid,
  setGrid,
  speedRef,
  stopTraversal,
  runID,
  currentRunID,
  setStats
) {
  if (!source || !destination) return;

  const startTime = performance.now();
  let nodesVisited = 0;

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

  let queue = [];
  let front = 0;

  queue.push(source);
  visited[source[0]][source[1]] = true;

  let found = false;

  while (front < queue.length) {
    if (stopTraversal.current || runID.current !== currentRunID) return;

    const [r, c] = queue[front++];
    nodesVisited++;

    // Visiting color
    setGrid((prev) => {
      const newGrid = prev.map((row) => row.slice());
      if (newGrid[r][c] !== 2 && newGrid[r][c] !== 3)
        newGrid[r][c] = 4;
      return newGrid;
    });

    await sleep(Number(speedRef.current));

    if (r === destination[0] && c === destination[1]) {
      found = true;
      break;
    }

    for (let [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < dimension &&
        nc < dimension &&
        !visited[nr][nc] &&
        grid[nr][nc] !== 1
      ) {
        visited[nr][nc] = true;
        parent[nr][nc] = [r, c];
        queue.push([nr, nc]);

        // Discovered color
        setGrid((prev) => {
          const newGrid = prev.map((row) => row.slice());
          if (newGrid[nr][nc] !== 3)
            newGrid[nr][nc] = 5;
          return newGrid;
        });
      }
    }
  }

  // Draw shortest path
  let pathLength = 0;

  if (found) {
    let cur = destination;

    while (cur) {
      if (stopTraversal.current || runID.current !== currentRunID) return;

      pathLength++;
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

  const endTime = performance.now();

  setStats({
    algorithm: "BFS",
    time: (endTime - startTime).toFixed(2),
    visited: nodesVisited,
    pathLength: pathLength,
  });
}
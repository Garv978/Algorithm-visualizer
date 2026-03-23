import { sleep } from "../../utils/sleep";

export async function Inorder(
  index,
  balls,
  setBalls,
  speedRef,
  stopTraversal,
  currentRunID,
  runID
) {
  if (index === null || stopTraversal.current || currentRunID !== runID)
    return;

  let node = balls[index];
  if (!node) return;

  // LEFT
  if (node.left !== null) {
    await Inorder(
      node.left,
      balls, // Remove structuredClone - use the same balls array
      setBalls,
      speedRef,
      stopTraversal,
      currentRunID,
      runID
    );
  }

  if (stopTraversal.current || currentRunID !== runID) return;

  // VISITING
  setBalls(prev => {
    let newBalls = structuredClone(prev);
    newBalls[index].state = "visiting";
    return newBalls;
  });

  await sleep(speedRef.current);

  // VISITED
  setBalls(prev => {
    let newBalls = structuredClone(prev);
    newBalls[index].state = "visited";
    return newBalls;
  });

  if (stopTraversal.current || currentRunID !== runID) return;

  // RIGHT
  if (node.right !== null) {
    await Inorder(
      node.right,
      balls, // Remove structuredClone - use the same balls array
      setBalls,
      speedRef,
      stopTraversal,
      currentRunID,
      runID
    );
  }
}
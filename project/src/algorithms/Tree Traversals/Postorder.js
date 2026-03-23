import {sleep} from "../../utils/sleep";

export async function Postorder(
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

  // LEFT - Fixed: call Postorder recursively, not Inorder
  if (node.left !== null) {
    await Postorder(
      node.left,
      balls,
      setBalls,
      speedRef,
      stopTraversal,
      currentRunID,
      runID
    );
  }

  // RIGHT - Fixed: call Postorder recursively, not Inorder
  if (node.right !== null) {
    await Postorder(
      node.right,
      balls,
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
}
import {sleep} from "../../utils/sleep";

export async function Postorder(
  index,
  balls,
  setBalls,
  speedRef,
  stopTraversal,
  runID,
  currentRunID
) {
  if (index === null || stopTraversal.current || currentRunID !== runID.current)
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
      runID,
      currentRunID
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
      runID,
      currentRunID
    );
  }

  if (stopTraversal.current || currentRunID !== runID.current) return;

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

  if (stopTraversal.current || currentRunID !== runID.current) return;
}
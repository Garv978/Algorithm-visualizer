import { COLORS } from "../../utils/colors";
import { sleep } from "../../utils/sleep";

export async function LinearSearch(
  bars,
  setBars,
  speedRef,
  searchValue,
  stopSearching,
  currentRunId,
  runId
) {
  let arr = [...bars];
  const startTime = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (currentRunId !== runId.current || stopSearching.current) return;

    // Pointer
    arr[i].color = COLORS.POINTER;
    setBars([...arr]);
    await sleep(speedRef.current);

    // Checking
    arr[i].color = COLORS.CHECKING;
    setBars([...arr]);
    await sleep(speedRef.current);

    if (arr[i].value === searchValue) {
      arr[i].color = COLORS.FOUND;
      setBars([...arr]);
      return;
    }

    // Visited
    arr[i].color = COLORS.VISITED;
    setBars([...arr]);
  }

  // Not found
  for (let i = 0; i < arr.length; i++) {
    arr[i].color = COLORS.NOT_FOUND;
  }
  setBars([...arr]);
}
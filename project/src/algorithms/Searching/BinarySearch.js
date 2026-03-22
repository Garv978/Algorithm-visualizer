import { sleep } from "../../utils/sleep";
import { COLORS } from "../../utils/colors";

export async function BinarySearch(
  bars,
  setBars,
  speedRef,
  searchValue,
  stopSearching,
  currentRunId,
  runId
) {
  let arr = [...bars];
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    if (currentRunId !== runId.current || stopSearching.current) return;

    let mid = Math.floor((start + end) / 2);

    // Pointer
    arr[mid].color = COLORS.POINTER;
    setBars([...arr]);
    await sleep(speedRef.current);

    // Checking
    arr[mid].color = COLORS.CHECKING;
    setBars([...arr]);
    await sleep(speedRef.current);

    if (arr[mid].value === searchValue) {
      arr[mid].color = COLORS.FOUND;
      setBars([...arr]);
      return;
    } 
    else if (arr[mid].value < searchValue) {
      // Eliminate left side
      for (let i = start; i <= mid; i++) {
        arr[i].color = COLORS.VISITED;
      }
      start = mid + 1;
    } 
    else {
      // Eliminate right side
      for (let i = mid; i <= end; i++) {
        arr[i].color = COLORS.VISITED;
      }
      end = mid - 1;
    }

    setBars([...arr]);
    await sleep(speedRef.current);
  }

  // Not found
  for (let i = 0; i < arr.length; i++) {
    arr[i].color = COLORS.NOT_FOUND;
  }
  setBars([...arr]);
}
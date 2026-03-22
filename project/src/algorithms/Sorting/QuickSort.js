import {sleep} from "../../utils/sleep"

export async function QuickSort(bars,setBars,speedRef,stopSorting,currentRunId,runId) {
  let arr = [...bars];
  await quickSortHelper(arr, 0, arr.length - 1, setBars, speedRef, stopSorting, currentRunId, runId);
}

async function quickSortHelper(arr, low, high, setBars, speedRef, stopSorting, currentRunId, runId) {
  if (low < high) {
    if (currentRunId !== runId.current || stopSorting.current) return;

    let pi = await partition(arr, low, high, setBars, speedRef, stopSorting, currentRunId, runId);

    await quickSortHelper(arr, low, pi - 1, setBars, speedRef, stopSorting, currentRunId, runId);
    await quickSortHelper(arr, pi + 1, high, setBars, speedRef, stopSorting, currentRunId, runId);
  }
}

async function partition(arr, low, high, setBars, speedRef, stopSorting, currentRunId, runId) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (currentRunId !== runId.current || stopSorting.current) return;

    if (arr[j].value < pivot.value) {
      i++;

      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      setBars([...arr]);
      await sleep(speedRef.current);
    }
  }

  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  setBars([...arr]);
  await sleep(speedRef.current);

  return i + 1;
}
import {sleep} from "../../utils/sleep"

export async function MergeSort(bars,setBars,speedRef,stopSorting,currentRunId,runId) {
  let arr = [...bars];
  mergeSortHelper(arr, 0, arr.length - 1, setBars, speedRef, stopSorting, currentRunId, runId);
}

async function mergeSortHelper(arr, left, right, setBars, speedRef, stopSorting, currentRunId, runId) {
  if (left >= right) return;

  if (currentRunId !== runId.current || stopSorting.current) return;

  let mid = Math.floor((left + right) / 2);

  await mergeSortHelper(arr, left, mid, setBars, speedRef, stopSorting, currentRunId, runId);
  await mergeSortHelper(arr, mid + 1, right, setBars, speedRef, stopSorting, currentRunId, runId);

  await merge(arr, left, mid, right, setBars, speedRef, stopSorting, currentRunId, runId);
}

async function merge(arr, left, mid, right, setBars, speedRef, stopSorting, currentRunId, runId) {
  let temp = [];
  let i = left;
  let j = mid + 1;

  while (i <= mid && j <= right) {
    if (currentRunId !== runId.current || stopSorting.current) return;

    if (arr[i].value < arr[j].value) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }

  while (j <= right) {
    temp.push(arr[j]);
    j++;
  }

  for (let k = left; k <= right; k++) {
    if (currentRunId !== runId.current || stopSorting.current) return;

    arr[k] = temp[k - left];
    setBars([...arr]);
    await sleep(speedRef.current);
  }
}
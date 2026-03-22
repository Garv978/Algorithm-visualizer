import { sleep } from "../../utils/sleep";

export async function HeapSort(
  bars,
  setBars,
  speedRef,
  stopSorting,
  currentRunId,
  runId
) {
  let arr = [...bars];
  let n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    if (currentRunId !== runId.current || stopSorting.current) return;
    await heapify(arr, n, i, setBars, speedRef, stopSorting, currentRunId, runId);
  }

  // Extract elements
  for (let i = n - 1; i > 0; i--) {
    if (currentRunId !== runId.current || stopSorting.current) return;

    // swap
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    setBars([...arr]);
    await sleep(speedRef.current);

    await heapify(arr, i, 0, setBars, speedRef, stopSorting, currentRunId, runId);
  }
}

async function heapify(arr, n, i, setBars, speedRef, stopSorting, currentRunId, runId) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left].value > arr[largest].value) {
    largest = left;
  }

  if (right < n && arr[right].value > arr[largest].value) {
    largest = right;
  }

  if (largest !== i) {
    if (currentRunId !== runId.current || stopSorting.current) return;

    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    setBars([...arr]);
    await sleep(speedRef.current);

    await heapify(arr, n, largest, setBars, speedRef, stopSorting, currentRunId, runId);
  }
}
import { sleep } from "../utils/sleep";

export async function CountingSort(
  bars,
  setBars,
  speedRef,
  stopSorting,
  currentRunId,
  runId
) {
  let arr = [...bars];
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let range = max - min + 1;

  let count = new Array(range).fill(0);
  let output = new Array(arr.length).fill(0);

  // Count frequency
  for (let i = 0; i < arr.length; i++) {
    if (currentRunId !== runId.current || stopSorting.current) return;
    count[arr[i] - min]++;
  }

  // Cumulative count
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Build output array
  for (let i = arr.length - 1; i >= 0; i--) {
    if (currentRunId !== runId.current || stopSorting.current) return;

    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  // Copy to bars with animation
  for (let i = 0; i < arr.length; i++) {
    if (currentRunId !== runId.current || stopSorting.current) return;

    arr[i] = output[i];
    setBars([...arr]);
    await sleep(speedRef.current);
  }
}
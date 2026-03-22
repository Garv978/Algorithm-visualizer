import { sleep } from "../../utils/sleep";

export async function CountingSort(
  bars,
  setBars,
  speedRef,
  stopSorting,
  currentRunId,
  runId
) {
  let arr = [...bars];

  let max = Math.max(...arr.map(b => b.value));
  let min = Math.min(...arr.map(b => b.value));
  let range = max - min + 1;

  let count = new Array(range).fill(0);
  let output = new Array(arr.length);

  // Count occurrences
  for (let i = 0; i < arr.length; i++) {
    if (currentRunId !== runId.current || stopSorting.current) return;
    count[arr[i].value - min]++;
  }

  // Prefix sum
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Build output array (stable sort)
  for (let i = arr.length - 1; i >= 0; i--) {
    if (currentRunId !== runId.current || stopSorting.current) return;

    let index = arr[i].value - min;
    output[count[index] - 1] = arr[i]; // move whole object
    count[index]--;
  }

  // Copy back with animation
  for (let i = 0; i < arr.length; i++) {
    if (currentRunId !== runId.current || stopSorting.current) return;

    arr[i] = output[i];
    setBars([...arr]);
    await sleep(speedRef.current);
  }
}
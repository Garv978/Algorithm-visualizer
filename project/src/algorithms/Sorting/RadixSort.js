import { sleep } from "../../utils/sleep";

export async function RadixSort(
  bars,
  setBars,
  speedRef,
  stopSorting,
  currentRunId,
  runId
) {
  let arr = [...bars];
  let max = Math.max(...arr.map(b => b.value));

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    if (currentRunId !== runId.current || stopSorting.current) return;

    await countingSortByDigit(
      arr,
      exp,
      setBars,
      speedRef,
      stopSorting,
      currentRunId,
      runId
    );
  }
}

async function countingSortByDigit(
  arr,
  exp,
  setBars,
  speedRef,
  stopSorting,
  currentRunId,
  runId
) {
  let output = new Array(arr.length);
  let count = new Array(10).fill(0);

  // Count digits
  for (let i = 0; i < arr.length; i++) {
    let digit = Math.floor(arr[i].value / exp) % 10;
    count[digit]++;
  }

  // Prefix sum
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build output (stable)
  for (let i = arr.length - 1; i >= 0; i--) {
    let digit = Math.floor(arr[i].value / exp) % 10;
    output[count[digit] - 1] = arr[i]; // move object
    count[digit]--;
  }

  // Copy back with animation
  for (let i = 0; i < arr.length; i++) {
    if (currentRunId !== runId.current || stopSorting.current) return;

    arr[i] = output[i];
    setBars([...arr]);
    await sleep(speedRef.current);
  }
}
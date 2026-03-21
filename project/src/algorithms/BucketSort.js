import { sleep } from "../utils/sleep";

export async function BucketSort(
  bars,
  setBars,
  speedRef,
  stopSorting,
  currentRunId,
  runId
) {
  let arr = [...bars];
  let n = arr.length;

  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let bucketCount = Math.floor(Math.sqrt(n));
  let buckets = Array.from({ length: bucketCount }, () => []);

  // Put elements into buckets
  for (let i = 0; i < n; i++) {
    if (currentRunId !== runId.current || stopSorting.current) return;

    let index = Math.floor(((arr[i] - min) / (max - min + 1)) * bucketCount);
    buckets[index].push(arr[i]);
  }

  // Sort each bucket
  for (let i = 0; i < bucketCount; i++) {
    buckets[i].sort((a, b) => a - b);
  }

  // Merge buckets back into array with animation
  let k = 0;
  for (let i = 0; i < bucketCount; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      if (currentRunId !== runId.current || stopSorting.current) return;

      arr[k++] = buckets[i][j];
      setBars([...arr]);
      await sleep(speedRef.current);
    }
  }
}
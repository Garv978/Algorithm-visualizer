import { sleep } from "../../utils/sleep";

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

  let max = Math.max(...arr.map(b => b.value));
  let min = Math.min(...arr.map(b => b.value));

  let bucketCount = Math.floor(Math.sqrt(n));
  let buckets = Array.from({ length: bucketCount }, () => []);

  // Put elements into buckets
  for (let i = 0; i < n; i++) {
    if (currentRunId !== runId.current || stopSorting.current) return;

    let index = Math.floor(
      ((arr[i].value - min) / (max - min + 1)) * bucketCount
    );
    buckets[index].push(arr[i]); // push whole object
  }

  // Sort each bucket (by value)
  for (let i = 0; i < bucketCount; i++) {
    buckets[i].sort((a, b) => a.value - b.value);
  }

  // Merge buckets back with animation
  let k = 0;
  for (let i = 0; i < bucketCount; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      if (currentRunId !== runId.current || stopSorting.current) return;

      arr[k++] = buckets[i][j]; // move whole object
      setBars([...arr]);
      await sleep(speedRef.current);
    }
  }
}
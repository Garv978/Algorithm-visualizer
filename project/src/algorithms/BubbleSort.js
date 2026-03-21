function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function BubbleSort(bars, setBars, speedRef, stopSorting,currentRunId,runId) {
  let arr = [...bars];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if(currentRunId !== runId.current || stopSorting.current) return;
      

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        setBars([...arr]);
        await sleep(speedRef.current);
      }
    }
  }
}
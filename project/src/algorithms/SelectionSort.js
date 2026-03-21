import {sleep} from "../utils/sleep"

export async function SelectionSort(bars,setBars,speedRef,stopSorting,currentRunId,runId){
  let arr = [...bars];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;
        for (let j = i + 1; j < n; j++) {
              if(currentRunId !== runId.current || stopSorting.current) return;
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
        setBars([...arr]);
        await sleep(speedRef.current);
    }
}
import {sleep} from "../utils/sleep"

export async function InsertionSort(bars,setBars,speedRef,stopSorting,currentRunId,runId) {
    let arr = [...bars];
    for (let i = 1; i < arr.length; i++) {
        if(stopSorting.current)
            return;
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            if(currentRunId !== runId.current || stopSorting.current) return;
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
        setbars([...arr]);
        await sleep(speedRef.current);
    }
}
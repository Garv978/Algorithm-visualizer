import { BubbleSort } from "./BubbleSort";
import { SelectionSort } from "./SelectionSort";
import { InsertionSort } from "./InsertionSort";
import { MergeSort } from "./MergeSort";
import { QuickSort } from "./QuickSort";
import { HeapSort } from "./HeapSort";
import { CountingSort } from "./CountingSort";
import { RadixSort } from "./RadixSort";
import { BucketSort } from "./BucketSort";

export const algorithmMap = {
  bubble: {
    name: "Bubble Sort",
    sort: BubbleSort,
  },
  selection: {
    name: "Selection Sort",
    sort: SelectionSort,
  },
  insertion: {
    name: "Insertion Sort",
    sort: InsertionSort,
  },
  merge: {
    name: "Merge Sort",
    sort: MergeSort,
  },
  quick: {
    name: "Quick Sort",
    sort: QuickSort,
  },
  heap: {
    name: "Heap Sort",
    sort: HeapSort,
  },
  counting: {
    name: "Counting Sort",
    sort: CountingSort,
  },
  radix: {
    name: "Radix Sort",
    sort: RadixSort,
  },
  bucket: {
    name: "Bucket Sort",
    sort: BucketSort,
  },
};
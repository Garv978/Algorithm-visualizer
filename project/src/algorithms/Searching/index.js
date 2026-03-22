import { BinarySearch } from "./BinarySearch";
import { LinearSearch } from "./LinearSearch";

export const searchMap = {
  linear: {
    name: "LinearSearch",
    search: LinearSearch,
  },
  binary: {
    name: "BinarySearch",
    search: BinarySearch,
  },
};
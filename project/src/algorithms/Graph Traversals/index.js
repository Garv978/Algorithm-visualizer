import {DFS} from "./DFS";
import {BFS} from "./BFS";
import {Djikstra} from "./Djikstra";

export const GridTraversalMap = {
  DFS: {
    name: "Depth First Search",
    traversal: DFS,
  },
  BFS: {
    name: "Breadth First Search",
    traversal: BFS,
  },
  Djikstra: {
    name: "Djikstra's Algorithm",
    traversal: Djikstra,
  },
}
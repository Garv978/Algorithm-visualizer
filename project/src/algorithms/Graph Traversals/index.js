import {DFS} from "./DFS";
import {BFS} from "./BFS";
import {Dijkstra} from "./Dijkstra";

export const GridTraversalMap = {
  DFS: {
    name: "Depth First Search",
    traversal: DFS,
  },
  BFS: {
    name: "Breadth First Search",
    traversal: BFS,
  },
  Dijkstra: {
    name: "Dijkstra's Algorithm",
    traversal: Dijkstra,
  },
}
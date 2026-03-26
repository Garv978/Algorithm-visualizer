import GridTraversal from './GridTraversal';
import Searching from "./Searching";
import Sorting from "./Sorting";
import Traversal from "./Traversal";

export const pageMap = {
  sorting: {
    name: "Sorting Algorithms",
    component: Sorting,
  },
  searching: {
    name: "Searching Algorithms",
    component: Searching,
    
  },
  Treetraversal: {
    name: "Traversal algorithms for Trees",
    component: Traversal,
  },
  GridTraversal:{
    name: "Traversal algorithms for Grids",
    component: GridTraversal,
  },
};
import Heap from "./Heap";
import LinkedList from "./LinkedList";
import Queue from "./Queue";
import Stack from "./Stack";
import Tree from "./Tree";

export const pageMap = {
  LinkedList: {
    name: "Linked List",
    component: LinkedList,
  },
  Stack: {
    name: "Stack",
    component: Stack,
  },
  Queue: {
    name: "Queue",
    component: Queue,
  },
  Heap: {
    name: "Heap",
    component: Heap,
  },
  Tree: {
    name: "Tree",
    component: Tree,
  },
};
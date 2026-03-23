import {Inorder} from "./Inorder";
import {Preorder} from "./Preorder";
import {Postorder} from "./Postorder";

export const TraversalMap = {
  Inorder: {
    name: "Inorder",
    traversal: Inorder,
  },
  Preorder: {
    name: "Preorder",
    traversal: Preorder,
  },
  Postorder: {
    name: "Postorder",
    traversal: Postorder,
  },
};
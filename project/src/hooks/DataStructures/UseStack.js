import { pop, push } from "../../Data Structures/StackLogic";
import { useEffect, useState } from "react";

import { generateStack } from "../../utils/stackGenerator";

export function useStack(maxSize){
  const [stack, setStack] = useState([]);

  useEffect(() => {
    setStack(generateStack(maxSize));
  }, [maxSize]);
  
  function pushElement(value) {
    if (value === "") return;
    setStack((prev) => push(prev, value, maxSize));
  }

  function popElement() {
    setStack((prev) => pop(prev));
  }

  function resetStack() {
    setStack(generateStack(maxSize));
  }

  return {
    stack,
    pushElement,
    popElement,
    resetStack,
  };
}
export function push(stack, value, maxSize) {
  if (stack.length >= maxSize) return stack; // overflow
  return [...stack, value];
}

export function pop(stack) {
  if (stack.length === 0) return stack; // underflow
  return stack.slice(0, -1);
}

export function peek(stack) {
  return stack[stack.length - 1];
}

export function isEmpty(stack) {
  return stack.length === 0;
}

export function isFull(stack, maxSize) {
  return stack.length === maxSize;
}
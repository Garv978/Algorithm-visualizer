export function generateStack(maxSize) {
  const stack = [];
  const size = Math.floor(Math.random() * maxSize) + 1;

  for (let i = 0; i < size; i++) {
    stack.push(Math.floor(Math.random() * 100));
  }

  return stack;
}
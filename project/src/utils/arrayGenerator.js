export function randomArray(size) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 300) + 20);
  }
  return arr;
}
export function sortedArray(size) {
  let arr = [];
  for (let i = 1; i <= size; i++) {
    arr.push(i * 3);
  }
  return arr;
}
export function reverseArray(size) {
  let arr = [];
  for (let i = size; i > 0; i--) {
    arr.push(i * 3);
  }
  return arr;
}
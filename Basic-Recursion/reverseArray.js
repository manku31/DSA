function reverseArray(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr;

  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  reverseArray(arr, start + 1, end - 1);

  return arr;
}

const arr = [0, 0, 0, 0, 1];
console.log(reverseArray(arr));

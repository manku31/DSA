const arr = [...Array(10)].map((e) => ~~(Math.random() * 10));
console.log("Original array ==> ", arr);

const sortedArr = mergeSort(arr, 0, arr.length - 1);
console.log("Sorted array ==> ", sortedArr);

function mergeSort(arr, start, end) {
  if (start >= end) return;

  let mid = Math.floor((start + end) / 2);

  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);

  return arr;
}

function merge(arr, start, mid, end) {
  let left = start;
  let right = mid + 1;
  const temp = [];

  while (left <= mid && right <= end) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= end) {
    temp.push(arr[right]);
    right++;
  }

  // update the main arr by temp
  for (let i = 0; i < temp.length; i++) {
    arr[start + i] = temp[i];
  }
}
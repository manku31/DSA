const arr = [...Array(10)].map((e) => ~~(Math.random() * 10));
console.log("Original array ==> ", arr);

const sortedArr = quickSort(arr, 0, arr.length - 1);
console.log("Sorted array ==> ", sortedArr);

function quickSort(arr, low, high) {
  if (low >= high) return;

  let pivotInd = partition(arr, low, high);
  // dont consider povotInd because its already shorted
  quickSort(arr, low, pivotInd - 1);
  quickSort(arr, pivotInd + 1, high);

  return arr;
}

function partition(arr, low, high) {
  let i = low - 1;
  let mid = Math.floor((low + high) / 2);
  [arr[mid], arr[high]] = [arr[high], arr[mid]];
  let pivot = arr[high];

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}

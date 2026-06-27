const arr = [...Array(10)].map((e) => ~~(Math.random() * 10));
console.log("Original array ==> ", arr);

const sortedArr = insertionSort(arr, arr.length);
console.log("Sorted array ==> ", sortedArr);

function insertionSort(arr, n) {
  // Base case
  if (n <= 1) return arr;

  // Sort first n-1 elements
  insertionSort(arr, n - 1);

  // Insert nth element into sorted array
  const last = arr[n - 1];

  let j = n - 2;

  while (j >= 0 && arr[j] > last) {
    arr[j + 1] = arr[j];
    j--;
  }

  arr[j + 1] = last;

  return arr;
}

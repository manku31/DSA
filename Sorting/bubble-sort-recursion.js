const arr = [...Array(10)].map((e) => ~~(Math.random() * 10));
console.log("Original array ==> ", arr);

const sortedArr = bubbleSort(arr, arr.length - 1);
console.log("Sorted array ==> ", sortedArr);

function bubbleSort(arr, end) {
  if (end <= 0) return arr;

  let swap = false;

  for (let j = 0; j < end; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      swap = true;
    }
  }

  if (swap === false) {
    return arr;
  }

  bubbleSort(arr, end - 1);

  return arr;
}

const arr = [...Array(10)].map((e) => ~~(Math.random() * 10));
console.log("Original array ==> ", arr);

const sortedArr = bubbleSort(arr);
console.log("Sorted array ==> ", sortedArr);

function bubbleSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  for (let i = arr.length - 1; i >= 1; i--) {
    let swap = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }

    // If no swaps occurred → array is already sorted
    if (swap === false) {
      return arr;
    }
  }

  return arr;
}

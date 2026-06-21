const arr = [...Array(10)].map((e) => ~~(Math.random() * 10));
console.log("Original array ==> ", arr);

const sortedArr = insertionSort(arr);
console.log("Sorted array ==> ", sortedArr);

function insertionSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }

  return arr;
}

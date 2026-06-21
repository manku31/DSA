const arr = [...Array(10)].map((e) => ~~(Math.random() * 10));
console.log("Original array ==> ", arr);

const sortedArr = selectionSort(arr);
console.log("Sorted array ==> ", sortedArr);

function selectionSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    let minInd = i;
    for (let j = i + 1; j < arr.length; j++) {
      // find the min value
      if (arr[j] < arr[minInd]) {
        minInd = j;
      }
    }

    if (minInd !== i) {
      // swap them
      [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
    }
  }
  return arr;
}

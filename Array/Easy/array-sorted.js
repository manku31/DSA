const arr = [...Array(10)].map((e) => ~~(Math.random() * 10));
console.log("Original array ==> ", arr);

const sorted = checkSorted(arr);
console.log("Array is sorted ==> ", sorted);

function checkSorted(arr) {
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      count++;
    }
  }

  if (count > 0 && count < 2) {
    if (arr[arr.length - 1] > arr[0]) count++;
  }

  return count < 2 ? true : false;
}

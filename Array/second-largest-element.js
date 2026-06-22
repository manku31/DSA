const arr = [...Array(10)].map((e) => ~~(Math.random() * 10));
console.log("Original array ==> ", arr);

const secondMaxElement = largestElement(arr);
console.log("Second largest element ==> ", secondMaxElement);

function largestElement(arr) {
  if (arr.length === 0) return -1;
  let max = 0;
  let secMax = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
      secMax = max;
      max = i;
    }

    if (arr[i] > secMax && arr[i] < max) {
      secMax = arr[i];
    }
  }

  return arr[secMax];
}

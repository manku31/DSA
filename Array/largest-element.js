const arr = [...Array(10)].map((e) => ~~(Math.random() * 10));
console.log("Original array ==> ", arr);

const maxElement = largestElement(arr);
console.log("Largest element ==> ", maxElement);

function largestElement(arr) {
  if (arr.length === 0) return -1;
  let max = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
      max = i;
    }
  }

  return arr[max];
}

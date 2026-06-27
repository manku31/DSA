const arr = [...Array(5)].map((e) => ~~(Math.random() * 10));
const k = Math.floor(Math.random() * 10) + 1;
console.log("Array and K ==> ", { arr, k });

const rotatedArray = rotateArr(arr, k);

function rotateArr(arr, k) {
  const n = arr.length;
  if (n === 0) return;

  k = k % n;
  console.log("new k => ", k);

  reverseArr(arr, 0, n - 1);
  reverseArr(arr, 0, k - 1);
  reverseArr(arr, k, n - 1);

  console.log("rotated array => ", arr);
}

function reverseArr(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

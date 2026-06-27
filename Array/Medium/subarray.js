const arr = [10, 5, 2, 7, 1, 9];
const k = 15;

const maxLengthSubArray = findMaxLengthSubArray(arr, k);
console.log("Max length subarray ==> ", maxLengthSubArray);

function findMaxLengthSubArray(arr, k) {
  const map = new Map();
  map.set(0, -1);
  let prefixSum = 0;
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    prefixSum = prefixSum + arr[i];

    if (map.has(prefixSum - k)) {
      res = Math.max(res, i - map.get(prefixSum - k));
    }

    if (!map.has(prefixSum)) {
      map.set(prefixSum, i);
    }
  }

  return res;
}

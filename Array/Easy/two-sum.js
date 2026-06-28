const arr = [2, 7, 11, 15];
const target = 9;

const array = twoSum(arr, target);
console.log('Two sub array ==> ', array)

function twoSum(arr, target) {
  const map = new Map();

  for (i = 0; i < arr.length; i++) {
    let comp = target - arr[i];

    if (map.has(comp)) {
      return [map.get(comp), i];
    }

    map.set(arr[i], i);
  }

  return [];
}

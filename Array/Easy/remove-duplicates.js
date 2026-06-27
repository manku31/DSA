const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; // array will be sorted

const index = removeDuplicates(arr);
arr.splice(index, arr.length - index);
console.log("Array is ==> ", arr);

function removeDuplicates(arr) {
  let k = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[k] = arr[i];
      k++;
    }
  }

  return k;
}

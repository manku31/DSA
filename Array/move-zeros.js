const arr = [...Array(10)].map((e) => ~~(Math.random() * 10));
console.log("Original array ==> ", arr);

const updatedArr = moveZero(arr);
console.log("Moved zero element in end ==> ", updatedArr);

function moveZero(arr) {
  if (arr.length < 1) return arr;

  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  for (let x = i; x < arr.length; x++) {
    arr[x] = 0;
  }

  return arr;
}

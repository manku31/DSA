const arr = [...Array(10)].map((e) => ~~(Math.random() * 10));
const k = Math.floor(Math.random() * 9) + 1;
const randomNum = arr[k];
console.log("Array and randomNum ==> ", { arr, randomNum });

const index = linearSearch(arr, randomNum);
console.log(`Index of ${randomNum} is ${index !== -1 ? index : "Not present"}`);

function linearSearch(arr, randomNum) {
  for (let ix in arr) {
    if (arr[ix] === randomNum) {
      return ix;
    }
  }

  return -1;
}

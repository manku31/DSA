const arr = [1, 1, 0, 1, 1, 1];

const maxCon = maxConsOfOne(arr);
console.log("Max cons of one ==> ", maxCon);

function maxConsOfOne(arr) {
  let maxOne = 0;
  let currentCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentCount++;
    } else {
      maxOne = Math.max(maxOne, currentCount);
      currentCount = 0;
    }
  }

  return Math.max(maxOne, currentCount);
}

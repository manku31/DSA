function contFreq(arr) {
  const hash = [];

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = (hash[arr[i]] || 0) + 1;
  }

  for (let i = 0; i < hash.length; i++) {
    if (hash[i] !== undefined) {
      console.log(`${i} is ${hash[i]} time`);
    }
  }
}

function highLowFreq(arr) {
  const hash = [];

  let max = -Infinity;
  let min = Infinity;

  let maxNum = null;
  let minNum = null;

  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] = (hash[arr[i]] || 0) + 1;
  }

  for (let key in hash) {
    if (hash[key] > max) {
      max = hash[key];
      maxNum = key;
    }

    if (hash[key] < min) {
      min = hash[key];
      minNum = key;
    }
  }

  console.log(`High Frequency is ${maxNum} : ${max} times`);
  console.log(`Low Frequency is ${minNum} : ${min} times`);
}

const arr = [1, 5, 15, 9, 25, 25, 5, 15, 5, 5, 5, 1, 9, 25, 1, 1];

// contFreq(arr);
highLowFreq(arr);

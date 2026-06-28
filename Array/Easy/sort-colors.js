const arr = [2, 0, 2, 1, 1, 0];

const sortColors = sortColors2(arr);
console.log("new arr ==> ", sortColors);

// Ponter method
function sortColors1(arr) {
  let start = 0;
  let mid = 0;
  let end = arr.length - 1;

  while (mid <= end) {
    switch (arr[mid]) {
      case 0:
        [arr[mid], arr[start]] = [arr[start], arr[mid]];
        start++;
        mid++;
        break;
      case 1:
        mid++;
        break;

      case 2:
        [arr[mid], arr[end]] = [arr[end], arr[mid]];
        end--;
        break;
    }
  }
  return arr;
}

// counter method
function sortColors2(arr) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) count0++;
    if (arr[i] === 1) count1++;
    else count2++;
  }

  for (let i = 0; i <= count0; i++) {
    arr[i] = 0;
  }

  for (let i = count0; i <= count0 + count1; i++) {
    arr[i] = 1;
  }

  for (let i = count0 + count1; i < arr.length; i++) {
    arr[i] = 2;
  }

  return arr;
}

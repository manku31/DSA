const a = [1, 2, 3, 4, 5, 6, 7, 9, 12];
const b = [2, 3, 4, 4, 5];

console.log("Original array ==> ", { a, b });

const unionArray = unionOfArray(a, b);
console.log("Union array ==> ", unionArray);

function unionOfArray(a, b) {
  const temp = [];
  let i = 0;
  let j = 0;

  while (a.length > i && b.length > j) {
    if (a[i] > b[j]) {
      // push j

      if (temp.length === 0 || temp[temp.length - 1] < b[j]) {
        temp.push(b[j]);
        j++;
      } else {
        j++;
      }
    } else if (a[i] < b[j]) {
      // push i

      if (temp.length === 0 || temp[temp.length - 1] < a[i]) {
        temp.push(a[i]);
        i++;
      } else {
        i++;
      }
    } else {
      // both same

      if (temp[temp.length - 1] < a[i]) {
        temp.push(a[i]);
        i++;
        j++;
      }
    }
  }

  while (i < a.length) {
    if (temp[temp.length - 1] !== a[i]) {
      temp.push(a[i]);
    }
    i++;
  }

  while (j < b.length) {
    if (temp[temp.length - 1] !== b[j]) {
      temp.push(b[j]);
    }
    j++;
  }

  return temp;
}

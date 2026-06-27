const arr = [8, 2, 4, 5, 3, 7, 1];

const missingNum = findMissingNumber(arr);
console.log("Missing number ==> ", missingNum);

function findMissingNumber(nums) {
  const n = nums.length + 1;

  // Sum of numbers from 1 to N
  const totalSum = (n * (n + 1)) / 2;

  // Sum of elements in the array
  const arraySum = nums.reduce((sum, num) => sum + num, 0);

  // Missing number
  return totalSum - arraySum;
}

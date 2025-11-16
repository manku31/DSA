function sumOfNum(num) {
  if (num <= 0) return 0;

  let sum = num;

  sum = sum + sumOfNum(num - 1);

  return sum;
}

console.log(sumOfNum(-5));

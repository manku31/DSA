function factorialOfNum(num) {
  if (num <= 1) return 1;

  const result = num * factorialOfNum(num - 1);

  return result;
}

console.log(factorialOfNum(0));

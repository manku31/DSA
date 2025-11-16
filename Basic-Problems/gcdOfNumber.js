function gcdOfNumber(num1, num2) {
  let gcd = 1;

  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
}

const result = gcdOfNumber(2, 10);

console.log(result);

function isPalindrome(num) {
  if (num < 0) return false;
  const dupNum = num;

  const revNum = reverseDigits(num);

  if (dupNum !== revNum) return false;

  return true;
}

function reverseDigits(num) {
  if (num === 0) return 0;

  let rem = 0;
  let res = 0;

  // handle negative numbers
  let sign = num < 0 ? -1 : 1;

  // work with positive equivalent
  num = Math.abs(num);

  while (num !== 0) {
    rem = num % 10;

    // remove last digit from num (similar to floor division)
    num = Math.trunc(num / 10);
    res = res * 10 + rem;
  }

  // restore sign
  res = res * sign;

  // check for 32-bit signed integer overflow
  if (res < -(2 ** 31) || res > 2 ** 31 - 1) return 0;

  return res;
}

const result = isPalindrome(78);

console.log(result);

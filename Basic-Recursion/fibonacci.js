function fib(n) {
  if (n === 1) return 1;
  if (n === 0) return 0;

  return fib(n - 1) + fib(n - 2);
}

function printFibonacci(num, i = 0) {
  if (num === 0) {
    console.log(0);
    return;
  }

  if (i >= num) return;

  console.log(fib(i));

  printFibonacci(num, i + 1);
}

printFibonacci(0);

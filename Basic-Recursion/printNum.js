function printNum(num) {
  if (num <= 0) return;

  printNum(num - 1);
  console.log(num);
}

printNum(5);

function reversePrintNum(num) {
  if (num <= 0) return;
  console.log(num);
  reversePrintNum(num - 1);
}

reversePrintNum(5);

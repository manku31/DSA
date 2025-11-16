function countDigits1(num) {
    // convert the number to string and get length
    return  num.toString().length;
}

function countDigits2(num) {

    if(num === 0) return 1;
    let count = 0;

    // repeatedly divide the number by 10 and increment count
    while(num !== 0) {
        num = Math.floor(num / 10);
        count++;
    }

    return count;
}

function countDigits3(num) {
    if(num === 0) return 1;

    // use logarithm to calculate number of digits
    return Math.floor(Math.log10(num)  + 1);
}

const result = countDigits1(10);

console.log(result);
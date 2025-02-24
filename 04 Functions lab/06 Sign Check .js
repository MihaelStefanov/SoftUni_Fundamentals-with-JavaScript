function SingCheck(numOne, numTwo, NumThree) {

    let calc = (a, b, c) => a * b * c;
    let sum = calc(numOne, numTwo, NumThree);

    let res = 'Positive';

    if (sum < 0) {
        res = 'Negative';
    }

    return res;

}

function SingCheck02(numOne, numTwo, NumThree) {
    let negativeCount = 0;

    if (numOne < 0) negativeCount++;
    if (numTwo < 0) negativeCount++;
    if (NumThree < 0) negativeCount++;

    let res = ''

    if (negativeCount % 2 == 0) {
        res = 'Positive';
    } else {
        res = 'Negative'
    }

    return res;

}





console.log(SingCheck(5, 12, 15));
console.log(SingCheck(-2, -7, -9));
console.log(SingCheck(-1, 0, -5));

console.log("--------");

console.log(SingCheck02(5, -12, 15));
console.log(SingCheck02(5, 12, -15));
console.log(SingCheck02(-5, -12, 15));
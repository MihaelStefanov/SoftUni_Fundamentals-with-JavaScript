function solve (num) {

    let result = '';
    let divisionNumsArr = [10, 7, 6, 3, 2];
    
for (let curNum of divisionNumsArr) {
    if ((num % curNum) !== 0) {
    result = 'Not divisible';
    } else {
        result = `The number is divisible by ${curNum}`;
        break;
    }
    
}

console.log(result);

}


solve(30)
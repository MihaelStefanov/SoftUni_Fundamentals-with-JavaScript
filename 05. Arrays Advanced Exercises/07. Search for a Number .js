function solve(numbersArr, comandsArr) {

    let numsToTake = comandsArr[0];
    let numsToDelete = comandsArr[1];
    let searchedNum = comandsArr[2];

    let newArr = numbersArr.slice(0, numsToTake);
    newArr.splice(0, numsToDelete);

    let numCounter = newArr.filter(e => e == searchedNum).length;

    console.log(`Number ${searchedNum} occurs ${numCounter} times.`);

}


solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);
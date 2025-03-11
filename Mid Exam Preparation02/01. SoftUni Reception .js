function solve(inputArr) {
    myArr = inputArr.slice().map(Number);

    let studentsCount = myArr.pop();

    let allEmployeesEfficiency = 0;
    myArr.filter(a => allEmployeesEfficiency += a);

    let hours = 0;

    while (studentsCount > 0) {
        studentsCount -= allEmployeesEfficiency
        hours ++;

        if (hours % 4 == 0) {
            hours += 1;
        }
    }

    return `Time needed: ${hours}h.`;
 
}

console.log(solve(['5','6','4','20']));
console.log(solve(['1','2','3','45']));
console.log(solve(['3','2','5','40']));

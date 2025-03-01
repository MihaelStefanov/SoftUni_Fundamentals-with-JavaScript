function solve(inputArr) {

    let arr = inputArr.shift().split(' ').map(Number);

    for (let line of inputArr) {
        let data = line.split(' ');

        let command = data[0];

        if (command == 'Add') {
            let num = Number(data[1]);
            arr.push(num)

        } else if (command == 'Remove') {
            let num = Number(data[1]);
            arr = arr.filter(el => el !== num);

        } else if (command == 'RemoveAt') {
            let idx = Number(data[1]);
            arr.splice(idx, 1);

        } else if (command == 'Insert') {
            let num = Number(data[1])
            let idx = Number(data[2])
            arr.splice(idx, 0, num)
        }

    }

    return arr.join(' ');
}

console.log(solve(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']));

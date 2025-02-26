function solve(num) {

    let row = [];

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            row.push(num);
        }

        console.log(row.join(' '));

        row = [];

    }

}

 
solve(4);
function solve(num) {

    let loadingBar = ``;
    let countdown = 10;

    for (let i = 0; i < num / 10; i++) {

        loadingBar += `%`;
        countdown -= 1;
    }
    
    if (countdown == 0) {
        return '100% Complete!';
    }

    for (let i = countdown; i > 0; i--) {
        loadingBar += `.`;
    }

    return `${num}% [${loadingBar}]\nStill loading...`;

}

console.log(solve(90));


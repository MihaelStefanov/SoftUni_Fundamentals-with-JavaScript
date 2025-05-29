function solve(text) {
    let output = text[0];

    for (let i = 1; i < text.length; i++) {
        let curChar = text[i];
        let prevChar = text[i - 1];

        if (curChar !== prevChar) {
            output += curChar;
        }

    }

    console.log(output);

}

solve('aaaaabbbbbcdddeeeedssaa');
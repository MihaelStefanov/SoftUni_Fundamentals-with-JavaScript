function solve(sentence, word) {
    let count = 0;

    sentence.split(' ').forEach(curWord => {
        if (curWord == word) {
            count++;
        }
    });

    console.log(count);
    
}


solve('This is a word and it also is a sentence', 'is');
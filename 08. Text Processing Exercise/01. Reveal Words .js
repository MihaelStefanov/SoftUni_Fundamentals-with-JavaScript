function solve(words, sentence) {
    let wordsArr = words.split(', ');

    for (let word of wordsArr) {
        let wordFromStars = '*'.repeat(word.length);
        sentence = sentence.replace(wordFromStars, word);        
    }

    console.log(sentence);
    
}

solve('great',
     'softuni is ***** place for learning new programming languages');
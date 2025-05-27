function solve(text) {
    let textArr = text.split(' ');
    
    for (let word of textArr) {

        if (word[0] == '#' && word.length > 1) {
            let wordArr = word.split('');
            wordArr.shift();

            let wordToPrint = '';

            for (let char of wordArr) {
                if (!isNaN(char)) {
                    wordToPrint = '';
                    break;
                } else {
                    wordToPrint += char;
                }
            }

            if (wordToPrint.length > 0) {
                console.log(wordToPrint);
            }           

        }

    }

}


solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
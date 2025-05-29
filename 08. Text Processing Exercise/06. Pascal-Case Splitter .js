function solve(text) {
    let words = '';

    for (let char of text) {
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 && words.length > 0) {
            words += `, ${char}`;
        } else {
            words += char;
        }
        
    }

    console.log(words);
    
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
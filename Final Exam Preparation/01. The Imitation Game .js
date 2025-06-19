function solve (inputArr) {
    let text = inputArr.shift();

    for (let line of inputArr) {
        if (line == 'Decode') {
            break;
        }

        let token = line.split('|');
        let command = token.shift();
        
        switch(command) {
            case "Move":   
            let count = Number(token[0]);
            
            for (let i = 1; i <= count; i++) {
                let firstLetter = text.substring(0, 1);
                let anotherText = text.substring(1);
                text = anotherText + firstLetter;
            }
            
            break;
            case "Insert": 
            let [idx, value] = token;
            let firstHalf = text.substring(0, idx);
            let secondHalf = text.substring(idx);
            text = firstHalf + value + secondHalf;            
            break;
             case "ChangeAll": 
             let [substring, replacement] = token;

             while(text.includes(substring)) {
                text = text.replace(substring, replacement);
             }
            break;
        }

    }

    console.log("The decrypted message is:", text);

}

solve([ 
  'zzHe', 
  'ChangeAll|z|l', 
  'Insert|2|o', 
  'Move|3', 
  'Decode' 
]);

solve([ 
  'owyouh', 
  'Move|2', 
  'Move|3', 
  'Insert|3|are', 
  'Insert|9|?',
  'Decode' 
]);
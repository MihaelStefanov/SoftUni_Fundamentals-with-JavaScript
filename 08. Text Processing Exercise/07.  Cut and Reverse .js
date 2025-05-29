function solve(text) {
    let reversedText = text.split('').reverse().join('');
    let firstHalf = reversedText.substring(0, reversedText.length / 2);
    let secondHalf = reversedText.substring(reversedText.length / 2);
   
    console.log(`${secondHalf}\n${firstHalf}`);
    
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
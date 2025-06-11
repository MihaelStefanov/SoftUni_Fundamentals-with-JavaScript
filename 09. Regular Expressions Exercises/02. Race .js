function solve(inputArr) {
    let listOfParticipants = inputArr.shift().split(', ');
    let participants = {};

    for (let name of listOfParticipants) {
        participants[name] = 0;
    }

    let line = inputArr.shift();

    let lettersPattern = /[A-Za-z]/g;
    let digitsPattern = /[0-9]/g;

    while (line !== 'end of race') {
        let currentName = line.match(lettersPattern).join('');
        let distance = 0;
        line.match(digitsPattern).map(num => distance += +num);

        if (participants.hasOwnProperty(currentName)) {
            participants[currentName] += distance;
        }

        line = inputArr.shift();

    }

    let result = Object.entries(participants).sort((a, b) => b[1] - a[1]);
    
    for (let i = 1; i <= 3; i++) {
        let name = result.shift()[0];

       switch (i) {
        case 1:
            console.log(`1st place: ${name}`);
            break;
        case 2:
            console.log(`2nd place: ${name}`);
            break;
                case 3:
            console.log(`3rd place: ${name}`);
            break;
       }
        
    } 

}

solve(['George, Peter, Bill, Tom', 
'G4e@55or%6g6!68e!!@ ', 
'R1@!3a$y4456@', 
'B5@i@#123ll', 
'G@e54o$r6ge#', 
'7P%et^#e5346r', 
'T$o553m&6', 
'end of race']);
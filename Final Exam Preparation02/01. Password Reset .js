function solve(input) {
    let password = input.shift();
    
    for (let line of input) {
        if (line == "Done") {
            break
        }
        
        let token = line.split(' ');
        let command = token.shift();
        
        if (command == "TakeOdd") {
            let passOnlyEven = ''
            for (let i = 1; i <= password.length; i+=2) {
                passOnlyEven += password[i];
            }
            password = passOnlyEven;

            console.log(password);

        } else if (command == "Cut") {
            let idx = Number(token[0]);
            let length = Number(token[1]);
            
            let firstHalf = password.substring(0, idx);
            let secondHalf = password.substring(idx + length);
            password = firstHalf + secondHalf;

            console.log(password);

        } else if (command == 'Substitute') {
            let substring = token[0];
            let substitute = token[1];
            if (password.includes(substring)) {
                while (password.includes(substring)) {
                    password = password.replace(substring, substitute);
                }

                console.log(password);
                
            } else {
                console.log('Nothing to replace!');
            }

    
        }
        
    }
    
    console.log(`Your password is: ${password}`);
    
}

solve((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]));
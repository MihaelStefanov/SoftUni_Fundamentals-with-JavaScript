function solve(password) {

    let isValid = true;

    let isValidLength = password.length < 6 || password.length > 10;

    if (isValidLength) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters');
    }

    let isOnlyLettersAndDigits = true;
    let digitsCount = 0;

    for (const el of password.split('')) {
        let currentCode = el.charCodeAt();
        let isNumber = currentCode >= 48 && currentCode <= 57;
        let isNotNumber = currentCode < 48 || currentCode > 57;
        let isNotSmallLetter = currentCode < 97 || currentCode > 122;
        let isNotCapLetter = currentCode < 65 || currentCode > 90;

        if (isNotNumber && isNotSmallLetter && isNotCapLetter) {
            isOnlyLettersAndDigits = false;
            isValid = false;
        }

        if (isNumber) {
            digitsCount++;
        }

    }


    if (!isOnlyLettersAndDigits) {
        console.log('Password must consist only of letters and digits');

    }

    if (digitsCount < 2) {
        isValid = false;
        console.log('Password must have at least 2 digits');

    }

    if (isValid) {
        console.log('Password is valid');

    }


}

solve('Log1n3');

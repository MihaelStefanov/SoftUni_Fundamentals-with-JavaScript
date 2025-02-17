function solve(inputEl) {

    let elType = typeof(inputEl);
    let result = `${elType}\n${inputEl}`;

    if (elType !== 'string' && elType !== 'number') {
        result = `${elType}\nParameter is not suitable for printing`;
    }
        
    console.log(result);
    
}

solve('Gosho')
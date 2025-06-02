function solve(string) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm;
    let validNames = string.match(pattern);
    console.log(validNames.join(' '));

}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");
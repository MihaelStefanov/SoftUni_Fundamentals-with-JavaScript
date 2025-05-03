function solve(inputArr) {

    for (let line of inputArr) {
        let [townName, latitude, longitude ] = line.split(' | ');
        
        let townObj = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }

        console.log(townObj);
        
    }

}


solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
console.log('---------');
solve(['Plovdiv | 136.45 | 812.575']);

function solve(inputArr) {
    let moviesArr = [];

    inputArr.forEach(line => {
        if(line.includes('addMovie ')) {
            let name = line.split('addMovie ')[1];
            moviesArr.push({name})
        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            
            let movie = moviesArr.find(m => m.name == name);

            if (movie) {
                movie.director = director;
            }

        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');
            
            let movie = moviesArr.find(m => m.name == name);

            if (movie) {
                movie.date = date;
            }
        }
        
    });

    for (let movie of moviesArr) {
        if (movie.name && movie.director && movie.date) {
        let movieAsString = JSON.stringify(movie);
        console.log(movieAsString);
        }
    }

}


solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford',
    'Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);
console.log("-----------");
solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);
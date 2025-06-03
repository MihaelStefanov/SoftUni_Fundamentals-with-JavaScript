function solve(inputArr) {
    let pattern = /\b(?<day>\d{1,2})([.-\/])(?<month>[A-Za-z]{3})\2(?<year>\d{4}\b)/g;

    let matchArr = inputArr[0].matchAll(pattern);

    for (let match of matchArr) {
        let {day, month, year} = match.groups;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }


}

solve(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);
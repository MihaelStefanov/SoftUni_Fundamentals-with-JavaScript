function solve(text) {
    let pattern = /([=\/])(?<location>[A-Z][A-Z-a-z]{2,})(?=\1)/g;
    let destinations = [];
    let travelPoints = 0;

    let match = pattern.exec(text);
    
    while(match) {
    let currentDestination = match.groups['location'];

    destinations.push(currentDestination);
    travelPoints += currentDestination.length;

    match = pattern.exec(text);
    }
    
    console.log(`Destinations: ${destinations.join(', ')}\nTravel Points: ${travelPoints}`);
    
}

solve(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))
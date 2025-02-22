function firstPlace(place) {
    console.log('~~~-== {🏆} ==-~~~');
    console.log('~~🍾 GOLD CUP 🍾-~~');
    console.log(`~~~-=  ${place}st.  =-~~~`);
}

function secondPlace(place) {
    console.log('~~~-== {🥈} ==-~~~');
    console.log('~~🍾 SILVER CUP 🍾~~');
    console.log(`~~~-=  ${place}nd.  =-~~~`);
}

function thirdPlace(place) {
    console.log('~~~-== {🥉} ==-~~~');
    console.log('~~🍾 BRONZE CUP 🍾~~');
    console.log(`~~~-=  ${place}rd.  =-~~~`);
}

function podium(place) {
    if (place == 1) {
        firstPlace(place);
    } else if (place == 2) {
        secondPlace(place);
    } else if (place == 3) {
        thirdPlace(place);
    }
}

function readFullName(firstName, LastName) {
    return `${firstName} ${LastName}`;
}

function PodiumCeremony(place, arr) {
    podium(place);
    console.log(`// ${readFullName(arr[0], arr[1])}`);
}

PodiumCeremony(1, ["Max", "Verstappen"]);
PodiumCeremony(2, ["Lewis", "Hamilton"]);
PodiumCeremony(3, ["Carlos", "Sainz"]);

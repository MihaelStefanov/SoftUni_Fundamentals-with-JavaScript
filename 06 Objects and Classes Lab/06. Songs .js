function solve(data) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songsArr = []
    let num = data.shift();
    let typeSong = data.pop();

    for (let i = 0; i < num; i++) {
        let [type, name, time] = data[i].split('_');
        let song = new Song(type, name, time);
        songsArr.push(song);
    }

    if (typeSong == 'all') {
        songsArr.forEach((i) => console.log(i.name));
    } else {
        let filtered = songsArr.filter((i) => i.type == typeSong);
        filtered.forEach((i) => console.log(i.name));  
    }

    
}


solve([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']);

console.log('----------');

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);

    console.log('----------');

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);
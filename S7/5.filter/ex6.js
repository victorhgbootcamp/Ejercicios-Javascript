const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const newStreamers = streamers.filter(function(streamer){
    if (streamer.gameMorePlayed.includes("Legends")){
        return streamer
     }
     else if (streamer.age > 35){
        return streamer.gameMorePlayed.toUpperCase()
     }
  }
)
console.log(newStreamers)
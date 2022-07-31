const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
const input$$ = document.querySelector("[data-function='toFilterStreamers']")
const button$$ = document.querySelector("[data-function='toShowFilterStreamers']")

function search(){
const filtrados = streamers.filter(streamer => streamer.name.toLowerCase().includes(input$$.value.toLowerCase()))
    console.log(filtrados)
}
button$$.addEventListener("click", search)
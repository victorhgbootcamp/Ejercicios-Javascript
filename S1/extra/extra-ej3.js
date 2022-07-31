
let peliculaPequeña = [];
let peliculaMediana = [];
let peliculaGrande = [];
const movies = [{ name: "Your Name", durationInMinutes: 130 },
{ name: "Pesadilla antes de navidad", durationInMinutes: 225 }, 
{ name: "Origen", durationInMinutes: 165 }, 
{ name: "El señor de los anillos", durationInMinutes: 967 }, 
{ name: "Solo en casa", durationInMinutes: 214 }, 
{ name: "El jardin de las palabras", durationInMinutes: 40 }];


for (let index = 0; index < movies.length; index++) {
    const peli = movies[index];
    if (peli.durationInMinutes <= 100){
    peliculaPequeña.push(peli)
    } else if (peli.durationInMinutes > 100 && peli.durationInMinutes <= 200){
    peliculaMediana.push(peli)
    } else { peliculaGrande.push(peli)
        }
   
}


console.log(peliculaPequeña, peliculaMediana, peliculaGrande)
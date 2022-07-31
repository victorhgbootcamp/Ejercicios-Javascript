const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"]

let cuantasA = 0
for (const animal of animals){
    for (const letra of animal){
        console.log(letra)
        if (letra === "a"){
            cuantasA++;
        }
    }
}
    console.log(cuantasA)

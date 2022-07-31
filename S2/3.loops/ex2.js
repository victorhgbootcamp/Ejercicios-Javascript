const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
    console.log("Alien tiene la propiedad: " + key + " y sus valores son: " + alien[key])
}

const nombres = ['Maria', 'Juan', 'Pepe', 'Carlos']

function findArrayIndex (array, text){
    for (let index = 0; index < nombres.length; index++) {
        const element = nombres[index];
        if(element === text)
        return index
    }
    }
    const posicion = findArrayIndex(nombres,"Maria")
    const posicion2= findArrayIndex(nombres,"Carlos")
    console.log(posicion)
    console.log(posicion2)
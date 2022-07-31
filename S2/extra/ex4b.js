const nombres = ["Maria", "Juan", "Pepe", "Carlos"];

function findArrayIndex(array, text) {
  for (let index = 0; index < nombres.length; index++) {
    const element = nombres[index];
    if (element === text){
        return index;
    } 
    
  }
}
function removeItem(nombres, text) {
  const indice = findArrayIndex(nombres, text);
  nombres.splice(indice, 1);
  return nombres;
}
const newArray = removeItem(nombres, "Pepe");
console.log(newArray)
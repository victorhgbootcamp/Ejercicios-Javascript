const list = [
    {name: "La tulipán", gender: "pop", order: 3},
    {name: "Calle falsa 123", gender: "rap", order: 2},
    {name: "Z balvin", gender: "reggeaton", order: 4},
    {name: "Neng de castefa", gender: "pop", order: 1}
]
// let newArray = 
// for (let index = 0; index < list.length; index++) {
//     const canciones = list[index];
 
//     canciones.order.sort(index, 1)
    
// }
// console.log(list)


function SortArray(x, y){
    if (x.order < y.order) {return -1;}
    if (x.order > y.order) {return 1;}
    return 0;
}
var s = list.sort(SortArray);
console.log(s);
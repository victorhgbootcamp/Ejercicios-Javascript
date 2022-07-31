const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

let totalSellCount = 0

for (let index = 0; index < products.length; index++) {
    const objeto = products[index];
    totalSellCount += objeto.sellCount;
    
}
// console.log(totalSellCount / products.length)
console.log(totalSellCount / products.length)
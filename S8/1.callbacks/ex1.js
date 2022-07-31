const numbersList = [];

function sum(a, b){
return (a + b)
}

function substract(a, b){
return (a - b)
}

function father(a, b, callback){
numbersList.push(callback(a, b))
}

// father(8, 6, sum)
// console.log(numbersList)
father(8, 6, substract)
console.log(numbersList)

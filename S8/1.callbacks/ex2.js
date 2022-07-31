
// const confirmValue = confirm('Soy un texto');
// const prompt = prompt('Soy un texto');
const userAnwsers = [];

function confirmExample(description){
return confirm(description)
}

function promptExample(description){
return  prompt(description)
}

function father(description, callback){
userAnwsers.push(callback(description))
}

father("Confirmado", confirmExample)
father("Hola caracola", promptExample)
console.log(userAnwsers)
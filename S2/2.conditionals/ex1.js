const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let index = 0; index < alumns.length; index++) {
    const element = alumns[index];
    let contador = 0;
    
    if (element.T1 == true){
        contador++
    }
    if (element.T2 == true){
        contador++
    }
    if (element.T3 == true){
        contador++
    }
    
element.isApproved = contador >= 2 ? true : false;
}

console.log(alumns)
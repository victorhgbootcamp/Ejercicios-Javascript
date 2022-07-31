fetch("http://localhost:3000/diary")
  .then((response) => {
    return response.json();
  })
  .then((datos) => {
    const datosOrdenados = ordenarDatos(datos);
    construir(datosOrdenados);
    console.log(datosOrdenados)
  });
  
const ordenarDatos = (datos) =>{
  return datos.sort(function(a, b){
    if (a.date < b.date) {
    return -1;
    }
    if (a.date > b.date) {
    return 1;
    } else {
    return 0;}
  });
}

function construir(datos) {
  
  for (const dato of datos) {
    const div$$ = document.createElement("div");
    const h3$$ = document.createElement("h3");
    const h5$$ = document.createElement("h5");
    const p$$ = document.createElement("p");
    const button$$ = document.createElement("button");

    button$$.textContent = "Eliminar";
    h3$$.textContent = dato.title;
    h5$$.textContent = dato.date;
    p$$.textContent = dato.description;

    div$$.appendChild(h3$$);
    div$$.appendChild(h5$$);
    div$$.appendChild(p$$);
    div$$.appendChild(button$$);

    button$$.addEventListener("click", function(){
      div$$.remove()
    })
    
    document.body.appendChild(div$$);
  }
 
}


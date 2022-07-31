const baseUrl = "https://api.nationalize.io?name=";
const inputt$$ = document.querySelector("input");
const button$$ = document.querySelector("button");

function consulta() {
  fetch(baseUrl + inputt$$.value)
    .then((response) => response.json())
    .then((data) => imprimir(data));
}

function imprimir(data) {
  let frase = "El nombre " + data.name + " tiene ";
  const p$$ = document.createElement("p");
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "X";

  for (const pais of data.country) {
    frase += " un " + pais.probability * 100 + " %" + " de ser de " + pais.country_id;
    }

  p$$.textContent = frase;
    btnEliminar.addEventListener("click", () => {
    p$$.remove();
  });

  document.body.appendChild(p$$);
  document.body.appendChild(btnEliminar);
}

button$$.addEventListener("click", consulta);

// const baseUrl = 'https://api.nationalize.io?name=';

// const input$$ = document.querySelector("input");
// const button$$ = document.querySelector("button");

// const eliminar = (p) => {
//     p.remove();
// }
// const pintar = (respuesta) =>{

//     const p$$ = document.createElement("p");
//     const botonEliminar$$ = document.createElement("button");

//     botonEliminar$$.textContent = "X"
//     p$$.textContent = `El nombre ${respuesta.name} tiene un ${respuesta.country[0].probability*100} por
//     ciento de ser de ${respuesta.country[0].country_id}`;

// botonEliminar$$.addEventListener("click", () => eliminar(p$$));

//     document.body.appendChild(p$$);
//     p$$.appendChild(botonEliminar$$);
// }

// const peticion = () =>{
//     fetch(baseUrl + input$$.value)
//     .then((res) => res.json())
//     .then((res) =>{
//         pintar(res);
//     })
// }
// button$$.addEventListener("click", peticion);

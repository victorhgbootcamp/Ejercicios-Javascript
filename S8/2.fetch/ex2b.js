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

  for (const pais of data.country) {
    frase += " un " + (pais.probability * 100) + " %" + " de ser de " + pais.country_id;
      }
  p$$.textContent = frase;
  document.body.appendChild(p$$);
}

button$$.addEventListener("click", consulta);

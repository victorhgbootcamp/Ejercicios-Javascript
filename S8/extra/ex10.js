fetch("http://localhost:3000/characters?_page=1&_limit=5")
  .then((response) => {
    return response.json();
  })
  .then((personajes) => {
    pintarPersonajes(personajes);
  });
function pintarPersonajes(personajes) {
  for (const personaje of personajes) {
    
    const h3Personaje$$ = document.createElement("h3");
    const imgPersonaje$$ = document.createElement("img");
    h3Personaje$$.textContent = personaje.name;
    imgPersonaje$$.setAttribute("src", personaje.image);
    divPersonaje$$.appendChild(h3Personaje$$);
    divPersonaje$$.appendChild(imgPersonaje$$);
    document.body.appendChild(divPersonaje$$);
  }
}
const divPersonaje$$ = document.createElement("div");
const button$$ = document.createElement("button");
document.body.appendChild(button$$);
button$$.textContent = "Cargar más";

button$$.addEventListener("click");
function nuevosPersonajes() {}

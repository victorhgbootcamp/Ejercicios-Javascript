const planetas$$ = document.querySelector('[data-function="planets"]');
const personajes$$ = document.querySelector('[data-function="characters"]');
const search$$ = document.querySelector('[data-function="search"]');

fetch("http://localhost:3000/planets")
  .then((response) => {
    return response.json();
  })
  .then((planetas) => {
    pintarPlanetas(planetas);
    
  });

const pintarPlanetas = (planetas) => {
  for (const planeta of planetas) {
    const divPlanet$$ = document.createElement("div");
    const imgPlanet$$ = document.createElement("img");
    const h3Planet$$ = document.createElement("h3");
    imgPlanet$$.setAttribute("src", planeta.image);
    imgPlanet$$.style.height = "200px";
    h3Planet$$.textContent = planeta.name;
    divPlanet$$.appendChild(h3Planet$$);
    divPlanet$$.appendChild(imgPlanet$$);
    planetas$$.appendChild(divPlanet$$);

    divPlanet$$.addEventListener("click", () => filtrarPersonajesPlaneta(planeta.id));
  }
  
};

const filtrarPersonajesPlaneta = (idPlaneta) => {
  fetch("http://localhost:3000/characters?idPlanet=" + idPlaneta)
    .then((response) => {
      return response.json();
    })
    .then((personajes) => {
      console.log(personajes)
      pintarPersonajes(personajes);
    });
};

const pintarPersonajes = (personajes) => {
  personajes$$.innerHTML = "";
  for (const personaje of personajes) {
    const divPersonaje$$ = document.createElement("div");
    const imgPersonaje$$ = document.createElement("img");
    const h3Personaje$$ = document.createElement("h3");
    imgPersonaje$$.setAttribute("src", personaje.avatar);
    h3Personaje$$.textContent = personaje.name;
    divPersonaje$$.appendChild(h3Personaje$$);
    divPersonaje$$.appendChild(imgPersonaje$$);
    personajes$$.appendChild(divPersonaje$$);
  }
};

input$$ = document.createElement("input");
button$$ = document.createElement("button")
button$$.textContent = "Buscar"

search$$.appendChild(input$$);
search$$.appendChild(button$$);



const buscarPersonaje = (valorInput) => {
  fetch("http://localhost:3000/characters")
    .then((response) => {
      return response.json();
    })
    .then((personajes) => {
      
      for (const personaje of personajes){
        if (personaje.name.toLowerCase() === valorInput.toLowerCase()){
        pintarPersonajes([personaje])
        }
      }      
    });
};
button$$.addEventListener("click", () => buscarPersonaje(input$$.value))
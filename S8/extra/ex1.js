fetch("https://breakingbadapi.com/api/characters")
  .then((response) => {
    return response.json();
  })
  .then((personajes) => {
    crearPersonajes(personajes);

  });

const crearPersonajes = function (personajes) {
  for (const personaje of personajes) {
    const div$$ = document.createElement("div");
    const imagen$$ = document.createElement("img");
    const titulos$$ = document.createElement("h2");
    imagen$$.setAttribute("src", personaje.img);
    titulos$$.textContent = personaje.name;

    div$$.appendChild(imagen$$);
    div$$.appendChild(titulos$$);
    document.body.appendChild(div$$);
  }
};

const divPersonajes$$ = document.querySelector(".c-characters")


fetch('http://localhost:3000/characters')
  .then((response) => {
    return response.json();
  })
  .then((personajes) => {
    pintarPersonajes(personajes)
  });

  function pintarPersonajes(personajes){
    for(const personaje of personajes){
    const div$$ = document.createElement("div");
    div$$.classList.add("c-characters__item")
const h3Personaje$$ = document.createElement("h3");
const imgPersonaje$$ = document.createElement("img")
h3Personaje$$.textContent = personaje.name;
imgPersonaje$$.setAttribute("src", personaje.avatar);
div$$.appendChild(h3Personaje$$)
div$$.appendChild(imgPersonaje$$)
divPersonajes$$.appendChild(div$$)
}
  }

  
const form = document.querySelector("form");
form.addEventListener("submit", getData)

function getData(event){
    event.preventDefault()
    const data = Object.fromEntries(new FormData(form).entries());
    data.defense = Number(data.defense)
    data.critic = Number(data.critic)
    data.vitality = Number(data.vitality)



}
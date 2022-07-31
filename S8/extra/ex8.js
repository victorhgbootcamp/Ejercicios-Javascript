const div$$ = document.createElement("div")
document.body.appendChild(div$$)

fetch("https://ghibliapi.herokuapp.com/films")
.then((response) => {
    return response.json();
  })
  .then((pelis) => {
pintarPelis(pelis)
  });

  const pintarPelis = (pelis) => {
for(const peli of pelis){
    const h3$$ = document.createElement("h3");
    const img$$ = document.createElement("img");
    img$$.setAttribute("src", peli.image);
    img$$.style.height = "200px";
    h3$$.textContent = peli.title;
    div$$.appendChild(h3$$);
    div$$.appendChild(img$$);
}
  }
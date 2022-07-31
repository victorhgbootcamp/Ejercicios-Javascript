const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];



for (let index = 0; index < countries.length; index++) {
    const pais = countries[index];
    const divs$$ = document.createElement("div");
divs$$.innerHTML = `<h4>${pais.title}</h4><img src="${pais.imgUrl}" alt="">`

document.body.appendChild(divs$$)

}
const boton$$ = document.querySelector("button");
function borrar (){
    const allDiv$$ = document.querySelectorAll("div");
    allDiv$$[allDiv$$.length -1].remove();
}
boton$$.addEventListener("click", borrar)
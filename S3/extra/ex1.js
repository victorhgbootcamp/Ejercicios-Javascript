const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul$$ = document.createElement("ul");
document.body.appendChild(ul$$)

for (let index = 0; index < countries.length; index++) {
    const pais = countries[index];
    const li$$ = document.createElement("li");
    li$$.textContent = pais;

    ul$$.appendChild(li$$)
}

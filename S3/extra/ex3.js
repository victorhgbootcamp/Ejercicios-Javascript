const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ul$$ = document.createElement("ul");

for (let index = 0; index < cars.length; index++) {
    const coche = cars[index];
    const li$$ = document.createElement("li");
    li$$.textContent = coche;
    ul$$.appendChild(li$$);
}
const div$$ = document.querySelector('[data-function="printHere"]');
div$$.appendChild(ul$$)
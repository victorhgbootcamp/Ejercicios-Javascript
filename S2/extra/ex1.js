const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
const nuevoArray = []

for (const movie of movies){

for (let index = 0; index < movie.categories.length; index++) {
    const category = movie.categories[index];

    if (!nuevoArray.includes(category)) {
        nuevoArray.push(category);
    }
}

}
console.log(nuevoArray)
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul$$ = document.createElement("ul")
for (let index = 0; index < apps.length; index++) {
const li$$ = document.createElement("li");
    li$$.textContent = apps[index];
    ul$$.appendChild(li$$);
}
document.body.appendChild(ul$$);
const baseUrl = 'https://api.nationalize.io?name=';

function consulta(){
    fetch (baseUrl + inputt$$.value)
    .then(res => res.json())
    .then(data => (console.log(data)))
}
const inputt$$ = document.querySelector("input")
const button$$ = document.querySelector("button")

button$$.addEventListener("click", consulta)
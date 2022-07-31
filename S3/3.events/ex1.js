const boton$$ = document.createElement("button");
boton$$.id = "btnToClick";
document.body.appendChild(boton$$);
boton$$.textContent = "Púlsame"
function evento (event) {
    console.log(event)
}

document.getElementById("btnToClick").addEventListener("click", evento)
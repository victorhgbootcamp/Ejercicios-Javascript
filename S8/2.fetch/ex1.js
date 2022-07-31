// function printData(data) {
// const h1$$ = document.createElement("h1");
// h1$$.innerHTML = data.name;
// const h2$$ = document.createElement("h2");
// h2$$.innerHTML = data.
// }


fetch('https://api.agify.io?name=michael')
.then (function(res){
    return res.json();
})
.then(function(data){
    console.log(data)
})
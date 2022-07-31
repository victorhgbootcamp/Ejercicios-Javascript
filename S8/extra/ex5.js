const div$$ = document.querySelector('[data-function="gameboard"]')
const input$$ = document.querySelector('[data-function="questions-number"]')


// function empezarJuego(){
fetch("https://opentdb.com/api.php?amount=" + input$$.value)
.then((response) => {
    return response.json();
  })
  .then((data) => {
    pintarPreguntas(data.results)

})

function pintarPreguntas (questions){
  for(const question of questions){ 
console.log(question.incorrect_answers)
    const h4$$ = document.createElement("h4");
    h4$$.textContent = question.question;
    div$$.appendChild(h4$$)
  }

}

function pintarRespuestas (){

}
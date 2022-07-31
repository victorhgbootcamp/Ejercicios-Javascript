fetch(`http://localhost:3000/orders`)  
.then((response) => {
    return response.json();
  })
.then((pedidos) => {
  const pedidosOrdenados  = ordenarPedidos(pedidos)
  
pintarPedidos(pedidosOrdenados)
  });

const ordenarPedidos = function(pedidos){
return pedidos.sort((a,b) =>{
  if (a.date > b.date){
    return -1
  }else if (a.date < b.date){
    return 1
  }else{
    return 0
  }
})};

function pintarPedidos(pedidos){
for (const pedido of pedidos){
    const div$$ = document.createElement("div")
    const h2$$ = document.createElement("h2");
    const h3$$ = document.createElement("h3");
    h3$$.textContent = pedido.date;
    h2$$.textContent = pedido.id;
    div$$.appendChild(h2$$);
    div$$.appendChild(h3$$)
    document.body.appendChild(div$$);
    }
}

  fetch(`http://localhost:3000/products`)  
.then((response) => {
    return response.json();
  })
.then((pedidos) => {
  console.log(pedidos)
  });

  function pintarProductos(){
    
  }
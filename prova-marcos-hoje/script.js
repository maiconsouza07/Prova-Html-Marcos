
function adicionarLocacao(nomeCliente, filmeLocado) {
    console.log("Locacao adicionada: nomeCliente, filmeLocado");


    atualizarTabelaLocacoes();

}

document.getElementById("formulario-locacao").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nomeCliente = document.getElementBuId("nomeCliente").value; 
    let filmeLocado = document.getElementBuId("filmeLocado").value; 

    adicionarLocacao(nomeCliente, filmeLocado);

    document.getElementById("nomeCliente").value = "";
    document.getElementById("filmeLocado").value = "";


});

pintarLinhasFilmes();



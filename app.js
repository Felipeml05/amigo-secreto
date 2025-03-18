let listaNombres = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre == ""){
        alert("Por favor ingrese un nombre valido");
    }else{
        listaNombres.push(nombre);
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML += "<li>" + nombre + "</li>";
        limpiarCaja();
    }
}
 
function sortearAmigo(){
    let azar = Math.floor(Math.random()*listaNombres.length);
    let amigoElegido = listaNombres[azar];
    document.getElementById('listaAmigos').style.display = "none";
    let listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML += "<li>" + amigoElegido + "</li>";
    document.getElementById('sortear').setAttribute('disabled','true');
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}



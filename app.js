// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let capturaDeNombre = document.getElementById("amigo").value.trim();
    if (capturaDeNombre == "") {
        alert ("Por favor, inserte un nombre.");
    } else {
        amigos.push(capturaDeNombre);
    }
    limpiarInput();
    agregarALaLista();
    console.log(amigos);
}


function limpiarInput () {
    document.getElementById("amigo").value = "";
}

function agregarALaLista () {
    document.getElementById("listaAmigos").innerHTML = "";

        for (indice = 0; indice < amigos.length; indice++){   
            let elemento = document.createElement("li");         
            elemento.innerHTML = amigos[indice]; 
            document.getElementById("listaAmigos").appendChild(elemento);
        }
}

function sortearAmigo () {
    if (amigos.length <= 0) {
       alert("No hay amigos que sortear");
    }
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = amigoSorteado;
    
}

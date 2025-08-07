// Challenge Amigo Secreto
//Declaración de variables
let amigos = [];
//Capturar valor de entrada
function agregarAmigo() {
    let ingresarAmigo = document.getElementById('amigo').value;
//validación de entrada y método push
    if (ingresarAmigo === '') {
     alert("Por favor ingrese un nombre:");
     //console.log(ingresarAmigo);
    } else {
        amigos.push(ingresarAmigo);
        document.querySelector('#amigo').value = '';
        mostrarListaAmigos();
        limpiarCampoEntrada();
    }
}
//limpiar campo de entrada
function limpiarCampoEntrada() {
    document.querySelector('#amigo').value = '';
}

//mostrar y actualizar lista de amigos
function mostrarListaAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = amigos[i];

        let listaHTML = document.createElement('li');
        listaHTML.textContent = li;
        listaAmigos.appendChild(listaHTML);
    }
}

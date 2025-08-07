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
    }
}
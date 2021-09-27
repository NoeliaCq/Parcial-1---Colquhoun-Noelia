const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const $dni = urlParams.get('dni')


document.getElementById("dniUsuario").innerHTML = `Usuario: ${$dni}`

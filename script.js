window.addEventListener("load", function () {
	loginForm.dni.addEventListener("keypress", soloNumeros, false);
});

//Solo permite introducir numeros.
function soloNumeros(e) {
	var key = window.event ? e.which : e.keyCode;
	if (key < 48 || key > 57) {
		e.preventDefault();
	}
}

function largoMinimo() {
	var Min_Length = 4;
	var length = document.getElementById("password").value.length;
	if (length < Min_Length) {
		alert('La contraseña debe tener al menos 4 caracteres')
	}
}

var $submitBtn = document.getElementById("submitBtn");

$submitBtn.addEventListener("click", largoMinimo);

//variables
var $myForm = document.getElementById("formulario");
var $dni = document.getElementById("dni");
var $password = document.getElementById("password");
var $dniError = document.querySelector('#dni + span.error');
var $passError = document.querySelector('#password + span.error');
var regExp = /^([0-9])*$/;

//Cartel de error individual para DNI
$dni.addEventListener('input', function () {
	if (regExp.test($dni.value)) {
		$dniError.innerHTML = '';
		$dniError.className = 'error';
	} else {
		showError();
	}
});

//Cartel de error individual para CONTRASEÑA
$password.addEventListener('input', function () {
	if ($password.validity.valid) {
		$passError.innerHTML = '';
		$passError.className = 'error';
	} else {
		showError();
	}
});

//validación de campos en Submit
$myForm.addEventListener('submit', function (event) {
	if (!regExp.test($dni.value) || !$password.validity.valid) {
		showError();
		event.preventDefault();
	}
});

//Formato de mensaje de errores
function showError() {
	if ($dni.validity.valueMissing) {
		$dniError.textContent = 'Debe introducir su DNI.';
		$dniError.className = 'error active';
	} else if ($password.validity.valueMissing) {
		$passError.textContent = 'Debe introducir su contraseña.';
		$passError.className = 'error active';
	} else if (!regExp.test($dni.value)) {
		$dniError.textContent = 'El valor introducido en Usuario debe ser numérico.';
		$dniError.className = 'error active';
	} else if ($password.validity.tooShort) {
		$passError.textContent = `La contraseña debe tener al menos ${$password.minLength} caracteres; ha introducido ${$password.value.length}.`;
		$passError.className = 'error active';
	}
}
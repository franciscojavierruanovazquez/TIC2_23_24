function validar(campo) {
    //var campo = document.getElementById("nombre");
    //alert(campo.value);
    if (campo.value == null || campo.value == "" || campo.value.length == 0) {
        //campo.style = "border: 2px solid red";
        campo.focus();
        mostrarError("spnombre", "Error: campo vacío");
    } else {
        //campo.style = "";
        borrarError("spnombre");
    }
}

function mostrarError(campo, mensaje) {
    document.getElementById(campo).innerHTML = mensaje;
}

function borrarError(campo) {
    document.getElementById(campo).innerHTML = "";
}

function validarFormulario() {



    return false;
}
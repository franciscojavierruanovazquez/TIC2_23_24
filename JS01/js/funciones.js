function iniciar() {
    //alert(document.getElementById("correo").value);
    var usu = prompt("Introduzca su nombre:");
    document.getElementById("saludo").innerHTML = "Hola, " + usu;
    //document.getElementById("saludo").style = "font-weight: bold";
    //document.getElementById("saludo").className = "titulo";

    /*var radios = document.getElementsByName("flexRadioDefault");
    for(let i = 0; i < radios.length; i++) {
        alert(radios[i].value);
    }*/

    document.getElementsByTagName("p")[0].innerHTML = "Párrafo Primero";
    document.getElementsByTagName("p")[0].onclick = ocultar;

    document.getElementsByClassName("texto")[2].style = "background: yellow";
}

function ocultar() {
    document.getElementById("saludo").style = "display: none";
}

function aparecer() {
    document.getElementById("saludo").style = "display: block";
}

window.addEventListener("load",iniciar,false);
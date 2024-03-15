function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    var imc = peso / Math.pow(altura, 2);

    var texto = "";

    if (imc < 18.5) {
        texto = "Peso insuficiente";
    } else if (imc >= 18.5 && imc <= 24.9) {
        texto = "Peso satisfactorio";
    } else if (imc >= 25 && imc < 27) {
        texto = "Sobrepeso";
    } else {
        texto = "Obesidad";
    }

    document.getElementById("resultado").innerHTML = texto;
}
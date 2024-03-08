function ordenarNumeros() {
    var num1 = Number.parseInt(document.getElementById("num1").value);
    var num2 = Number.parseInt(document.getElementById("num2").value);
    var num3 = Number.parseInt(document.getElementById("num3").value);

    var resultado = "";

    if ((num1 > num2) && (num1 > num3)) {
        if (num2 > num3) {
            resultado = num1 + ">" + num2 + ">" + num3;
        } else {
            resultado = num1 + ">" + num3 + ">" + num2;
        }
    } else if ((num2 > num1) && (num2 > num3)) {
        if (num1 > num3) {
            resultado = num2 + ">" + num1 + ">" + num3;
        } else {
            resultado = num2 + ">" + num3 + ">" + num1;
        }
    } else {
        if (num1 > num2) {
            resultado = num3 + ">" + num1 + ">" + num2;
        } else {
            resultado = num3 + ">" + num2 + ">" + num1;
        }
    }
    document.getElementById("ordenacion").innerHTML = resultado;
}
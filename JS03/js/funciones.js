function calcularEdad() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;

    if (edad != "" || edad.toString().length > 0) {
        // Ha rellenado el campo edad
        var dias = edad * 365;

        document.getElementById("resultado").innerHTML = "<b>Buenas " + nombre + 
                ". Usted tiene " + edad + " años que son " + dias + " dias</b>";
    } else {
        // Ha rellenado el campo fecha
        var fechaNac = new Date(fecha).getTime();
        var fechaHoy = new Date().getTime();

        var diferencia = fechaHoy - fechaNac;

        diferencia = Math.floor(diferencia / (1000*60*60*24));

        document.getElementById("resultado").innerHTML = "<b>Buenas " + nombre + 
        ". Usted tiene " + diferencia + " días de edad</b>";
    }
}
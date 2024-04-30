<?php
$usuario = trim(htmlspecialchars(strip_tags($_REQUEST["usuario"]),ENT_QUOTES, "UTF-8"));

$pass = trim(htmlspecialchars(strip_tags($_REQUEST["pass"]),ENT_QUOTES, "UTF-8"));

$correcto = false;

echo $usuario . "<br>" . $pass;

// Nos conectamos a la base de datos con dirección, usuario, clave y nombre de base datos
$conexion = mysqli_connect("localhost", "root", "", "cursophp") 
                or die("Problemas de conexión");

// Establecer la codificación de los caracteres a mostrar
$conexion -> set_charset("utf8");

// Lanzar una consulta para comprobar que nuestro usuario y pass está en la BD
// AES_ENCRYPT necesita 2 parámetros, la password y la clave para encriptarla 
$sql = "SELECT idAdministrador, login, password 
        FROM administradores WHERE login = ? AND password = AES_ENCRYPT(?,?)";

// Precompilamos la sentencia SQL
$stmt = mysqli_stmt_init($conexion);

// Iniciamos la sentencia con la consulta a la base de datos
if (!mysqli_stmt_prepare($stmt, $sql)) {
    echo "Error SQL";
} else {
    // Ejecutar la consulta 
    $clave = "5678";

    // Vamos a asignar usu y pass a los ? de la consulta
    $stmt->bind_param("sss", $usuario, $pass, $clave);

    // Ejecutar
    $stmt->execute();

    //Comprobar si hay coincidencia
    if($stmt->fetch()) {
        $correcto = true;
    }
}

// cerrar la conexión con la BD
mysqli_close($conexion);

if ($correcto) {
    // Inicio de sesión correcto
    header("Location: consulta.php");
} else {
    header("Location: index.php?mensaje=Login Incorrecto");
}
?>
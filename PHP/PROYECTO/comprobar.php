<?php
$usuario = trim(
            htmlspecialchars(
                strip_tags($_REQUEST["usuario"]),
                    ENT_QUOTES,"UTF-8"));

$pass = trim(
    htmlspecialchars(
        strip_tags($_REQUEST["pass"]),
            ENT_QUOTES,"UTF-8"));

// Validar el usuario con la tabla de administradores

?>
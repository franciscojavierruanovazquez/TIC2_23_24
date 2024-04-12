<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INFO</title>
</head>
<body>
    <h2>INFO</h2>
    <?php
        //phpinfo();
        /*echo "<b>Hola</b>";
        print "<p>Hola</p>\n";

        // Variables
        $mensaje = "Holaaaaa";
        echo $mensaje . ". Qué tal";

        $a = 8;
        $b = 9;
        $c = $a + $b;
        echo $c;

        $a = $a + 1;
        $a++;
        $a += 30;
        $a--;
        $a -= 30;
        $a *= 8; // $a = $a * 8;

        $correcto = true; // false

        if ($correcto) {
            print "Correcto!!!";
        } else {
            print "Incorrecto!!!";
        }

        print "<pre>";
        print_r(get_defined_constants());
        print "</pre>";*/

        $aleatorio = rand(1,10);
        if ($aleatorio < 5) {
            echo "<p style='color: red'>El valor $aleatorio es menor que 5</p>";
        } else {
            echo "<p style='color: blue'>El valor $aleatorio es mayor o igual que 5</p>";
        }

        for ($i=1; $i <= 10; $i++) { 
            echo "<p>$i</p>";
        }

        $hora = date("H");
        if ($hora >= 8 && $hora <= 12) {
            echo "<p>Buenos días</p>";
        } else if ($hora > 12 && $hora <= 20) {
            echo "<p>Buenas tardes</p>";
        } else {
            echo "<p>Buenas noches</p>";
        }
    ?>

    <!--<?=$mensaje?>-->
</body>
</html>
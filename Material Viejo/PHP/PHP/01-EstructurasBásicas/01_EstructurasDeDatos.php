<?php 
    
    //Estructuras de Datos
    //  Variables: Declaración, Inicialización y Uso
    $nuevaVariable = "valorA";
    $otraVariable = $nuevaVariable;
    echo("Contenido de la variable: $nuevaVariable");

    //
    echo("<br>");
    //

    //  Arrays: Declaración, Funciones generales, Uso
    //      Inicialización
    $nuevoArray = array();
    //      Agregado de Datos al array
    array_push($nuevoArray, "dato que se quiere agregar");

    //      Nota: el método $array[] es equivalente al método array_push(), 
    //      pero es más ágil, y además permite el agregado de elementos al array bajo claves.
    //      Según notas en la documentación oficial: https://www.php.net/manual/en/function.array-push.php
    $nuevoArray[] = "otro dato para agregar";
    $nuevoArray['clave'] = "otro dato que se agrega asociado a una clave";
    //      Nota: las claves pueden ser de tipo int o string

    //      Para acceder a un dato del array, 

    //      La función count() permite obtener la longitud de un array 
    //      u otras estructuras semejantes
    echo( count($nuevoArray) );



    var_dump($nuevoArray);


    //Estructuras de control

 ?>
<?php

$par1_ip = "127.0.0.1";
$par1_name = "root";
$par1_p = "";
$par1_db = "garniture_db";

$induction = mysql_connect($par1_ip,$par1_name,$par1_p,$par1_db);

if($induction == false){
    echo "Ошибка подключения";
}

?>

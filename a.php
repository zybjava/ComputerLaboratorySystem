<?php
	include("backend/system.php");
	$a = new solar_system();
	echo $a->encrypt("Hello") . "<br><br>";
	echo $a->decrypt("gejghdbjghedjghedjghedcb");
?>
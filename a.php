<?php
	include("backend/system.php");
	$a = new system("Hello");
	echo $a->encrypt_bin() . "<br><br>";
	echo $a->decrypt_bin("gejghdbjghedjghedjghedcb");
?>
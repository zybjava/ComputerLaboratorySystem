<?php
	include("backend/system.php");
	$a = new system("Hello");
	echo $a->encrypt_bin();
?>
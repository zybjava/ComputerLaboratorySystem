<?php
	include("database.php");
	$std = new solar_system();
	if(!isset($_POST['studentID']) || !isset($_POST['password'])){
		echo "Error";
	}else{
		$studentID = $std->encrypt($_POST['studentID']);
		$password = sha1($_POST['password']);

		if(user($conn, $studentID, $password)){
			echo "{'a': 'a'}";
		}else{
			echo "{'b': 'b'}";
		}
	}
	function user($conn, $studentID, $password) : bool{
		return mysqli_num_rows(mysqli_query($conn, "SELECT * FROM users WHERE studentID = '$studentID' AND password = '$password'")) <= 0;
	}
?>
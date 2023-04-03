<?php
	include("database.php");
	$std = new solar_system();
	if(!isset($_POST['userID']) || !isset($_POST['password'])){
		echo "Error";
	}else{
		$userID = $std->encrypt($_POST['userID']);
		$password = sha1($_POST['password']);

		if(user($conn, $studentID, $password)){
			// Existed
			setcookie('dll_user', $userID, time() + (86400 * 7));
			echo "{'status': 300, 'redirect': 'add-computer.html'}";
		}else{
			// Not exists
			echo "{'status': 400, 'message': 'User ID and password not match'}";
		}
	}
	function user($conn, $studentID, $password) : bool{
		return mysqli_num_rows(mysqli_query($conn, "SELECT * FROM users WHERE studentID = '$studentID' AND password = '$password'")) > 0;
	}
?>
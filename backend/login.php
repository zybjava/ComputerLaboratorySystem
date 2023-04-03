<?php
	include("database.php");
	$std = new solar_system();
	//echo $_POST['userID'];
	if(!isset($_POST['userID']) || !isset($_POST['password'])){
		echo json_decode(json_encode('{"status": 400, "message": "Cant find"}'));
	}else{
		$userID = $std->encrypt($_POST['userID']);
		$password = sha1($_POST['password']);

		if(user($conn, $userID, $password)){
			// Existed
			setcookie('dll_user', $userID, time() + (86400 * 7));
			echo json_decode(json_encode('{"status": 300, "redirect": "add-computer"}'));
		}else{
			// Not exists
			echo json_decode(json_encode('{"status": 400, "message": "User ID and password not match"}'));
		}
	}
	function user($conn, $userID, $password) : bool{
		return mysqli_num_rows(mysqli_query($conn, "SELECT * FROM users WHERE userID = '$userID' AND password = '$password'")) > 0;
	}
?>
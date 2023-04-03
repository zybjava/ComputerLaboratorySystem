<?php
	include("database.php");
	$std = new solar_system();
	if(!isset($_POST['userID']) || !isset($_POST['password'])){
		echo json_decode(json_encode('{"status": 400, "message": "Cant find"}'));
	}else if(strlen($_POST['userID']) <= 5){
		echo json_decode(json_encode('{"status": 400, "message": "Atleast 5 characters long for userID"}'));
	}else if(strlen($_POST['password']) <= 8){
		echo json_decode(json_encode('{"status": 400, "message": "8 characters long for password"}'));
	}else{
		$userID = myData($std, 'userID');
		$firstname = myData($std, 'firstname');
		$middlename = myData($std, 'middlename');
		$lastname = myData($std, 'lastname');
		$office = myData($std, 'office');
		$password = sha1($_POST['password']);
		$password2 = sha1($_POST['password2']);

		if(user($conn, $userID, $password)){
			if($password == $password2){
				$sql = mysqli_query($conn, "INSERT INTO users (userID, firstname, middlename, lastname, office, password) VALUES ('$userID', '$firstname', '$middlename', '$lastname', '$office', '$password')");
				if($sql){
					echo json_decode(json_encode('{"status": 300, "redirect": "add-computer"}'));
				}else{
					echo mysqli_error($conn);
				}
			}else{
				echo json_decode(json_encode('{"status": 400, "message": "Password not match"}'));
			}
		}else{
			echo json_decode(json_encode('{"status": 400, "message": "User ID is already existed in the server"}'));
		}
	}
	function user($conn, $userID, $password) : bool{
		return mysqli_num_rows(mysqli_query($conn, "SELECT * FROM users WHERE userID = '$userID'")) <= 0;
	}
	function myData($std, $key) : string{
		$result = "";
		if(isset($_POST[$key])){
			$result = $std -> encrypt($_POST[$key]);
		}
		return $result;
	}
?>
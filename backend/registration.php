<?php
	include("database.php");
	$std = new solar_system();
	if(!isset($_POST['userID']) || !isset($_POST['password'])){
		echo "Error";
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
					echo "{'status': 300, 'redirect': 'add-computer.html'}";
				}else{
					echo mysqli_error($conn);
				}
			}else{
				echo "{'status': 400, 'message': 'Password not match'}";
			}
		}else{
			echo "{'b': 'b'}";
		}
	}
	function user($conn, $userID, $password) : bool{
		return mysqli_num_rows(mysqli_query($conn, "SELECT * FROM users WHERE userID = '$userID' AND password = '$password'")) <= 0;
	}
	function myData($std, $key) : string{
		$result = "";
		if(isset($_POST[$key])){
			$result = $std -> encrypt($_POST[$key]);
		}
		return $result;
	}
?>
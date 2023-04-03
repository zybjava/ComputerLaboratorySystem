<?php
	include("database.php");
	$std = new solar_system();
	if(!isset($_POST['studentID']) || !isset($_POST['password'])){
		echo "Error";
	}else{
		$userID = myData('userID');
		$firstname = myData('firstname');
		$middlename = myData('middlename');
		$lastname = myData('lastname');
		$office = myData('office');
		$password = sha1($_POST['password']);
		$password2 = sha1($_POST['password2']);

		if(user($conn, $userID, $password)){
			if($password == $password2){
				$sql = mysqli_query($conn, "INSERT INTO users ('userID', 'firstname', 'lastname', 'middlename', 'lastname', 'office', 'password') VALUES ('$userID', '$firstname', '$middlename', '$lastname', '$office', '$password')");	
			}else{}
		}else{
			echo "{'b': 'b'}";
		}
	}
	function user($conn, $userID, $password) : bool{
		return mysqli_num_rows(mysqli_query($conn, "SELECT * FROM users WHERE userID = '$userID' AND password = '$password'")) <= 0;
	}
	function myData($key) : string{
		include("database.php");
		$std = new solar_system();
		$result = "";
		if(isset($_POST[$key])){
			$result = $std -> encrypt($_POST[$key]);
		}
		return $result;
	}
?>
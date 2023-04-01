<?php
	include("database.php");
	$studentID = $_POST['studentID'];
	$password = $_POST['password'];

	function user($conn, $studentID, $password){
		
		return mysqli_num_rows(mysqli_query($conn, "SELECT * FROM users WHERE studentID = '$studentID' AND password = '$passwords'")) <= 0;
	}
?>
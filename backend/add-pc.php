<?php
	include("database.php");
	if(!isset($_POST['roomname']) || !isset($_POST['com-id']) || !isset($_POST['device-id'])){
		echo "Error";
	}else{
		$sys = new solar_system();
		$room = $sys->encrypt($_POST['roomname']);
		$comID = $sys->encrypt($_POST['com-id']);
		$devID = $sys->encrypt($_POST['device-id']);
		
		if(check_pc($conn, $devID)){
			if(mysqli_query($conn, "INSERT INTO computers (computer_id, device_id, room) VALUES ('$comID', '$devID', '$room')")){
				header("Location: ../add-computer.html	");
			}else{
				echo mysqli_error($conn);
			}
		}else{
			echo "Already Existed";
		}
	}
	function check_pc($conn, $devID) : bool {
		return mysqli_num_rows(mysqli_query($conn, "SELECT * FROM computers WHERE device_id = '$devID'")) <= 0;
	}
?>
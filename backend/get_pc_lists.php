<?php
	include("database.php");
	$sys = new solar_system();
	$output = "";

	$sql = mysqli_query($conn, "SELECT * FROM computers");
	$total = mysqli_num_rows($sql);
	$cl1 = (object)[];
	echo "{ 'data': [";
	for($i = 1; $i <= $total; $i++){
		$q = mysqli_query($conn, "SELECT * FROM computers WHERE ID = $i");
		$row = mysqli_fetch_array($q);
		$room = $sys->decrypt($row['room']);
		$comID = $sys->decrypt($row['computer_id']);
		$devID = $sys->decrypt($row['device_id']);

		echo "{'roomname': '" . $room . "', 'computerID': '" . $comID . "', 'deviceID': '" . $devID . "'}";
		if($i < $total){
			echo ",";
		}
	}
	echo "]}";// ", 'cl2': " . json_encode($cl2) . ", 'cl3': " . json_encode($cl3) . "}";
?>
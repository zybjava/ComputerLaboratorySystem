<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
		<link rel="stylesheet" href="res/styles.css">
		<link rel="stylesheet" href="res/media.css">
	</head>
	<body>
		<header>
			<div class="base-title">
				<img class="logo" src="https://scontent.fmnl25-2.fna.fbcdn.net/v/t39.30808-6/201938526_108902921392659_8882674753109007748_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH8LBaQs0axfxGYhq2GwQgk8Nk5ddeF4J_w2Tl114Xgn4pxfbRIP6BiJ_M5CoMxUOmG80T2Q4fxGF3eOUwFZKAD&_nc_ohc=-ME8tFeyFyIAX8E81jk&_nc_ht=scontent.fmnl25-2.fna&oh=00_AfB96zzwYR3qHXrQjImT68znq3iUBC7LhA9p3hV2DcRSMg&oe=642D5352" alt="DLL Logo">
				<i class="fa-solid fa-bars fa-2xl"></i>
				<div class="title">
					<h3>Dalubhasaan ng Lungsod ng Lucena</h3>
					<h5>Computer Laboratory Management System</h5>
				</div>
			</div>
			<nav>
				<ul>
					<li id="home">Welcome</li>
					<li>Welcome</li>
					<li id="logout">Logout</li>
				</ul>
			</nav>
		</header>
		<div class="container">
			<section>
				<ul id="informations-cl1">
					<h3 id="cl1-title" style="text-align: center;">There is no device recorded in Computer Laboratory 1</h3>
				</ul>
				<ul id="informations-cl2">
					<h3 id="cl2-title" style="text-align: center;">There is no device recorded in Computer Laboratory 2</h3>
				</ul>
				<ul id="informations-cl3">
					<h3 id="cl3-title" style="text-align: center;">There is no device recorded in Computer Laboratory 2</h3>
				</ul>
			</section>
			<main>
				<div class="form" id="add-new-device" method="POST" action="backend/add-pc.php">
					<h1>Computer Information</h1>
					<span>
						<label for="roomname">Room name:</label>
						<select id="roomname" name="roomname">
							<option value="cl1">Computer Laboratory 1</option>
							<option value="cl2">Computer Laboratory 2</option>
							<option value="cl3">Computer Laboratory 3</option>
							<option value="registrar">Registrar's Office</option>
							<option value="osas">Office of the Student Affairs and Services</option>
							<option value="bsit">Information Technology Department Office</option>
							<option value="bsais">Accounting Information System Department Office</option>
							<option value="bse">Entrepreneurship Department Office</option>
							<option value="bspa">Public Administrator Department Office</option>
							<option value="bsba">Business Administrator Department Office</option>
							<option value="bssw">Social Works Department Office</option>
							<option value="abels">Arts in English Language Studies</option>
							<option value="btvte">Technical-Vocational Teacher Education</option>
						</select>
					</span>
					<span>
						<label for="reciever">Recieve by:</label>
						<input type="text" id="reciever" name="reciever">
					</span>
					<span>
						<label for="model">Model:</label>
						<input type="text" id="model" name="model">
					</span>
					<span>
						<label for="device-id">Device ID:</label>
						<input type="text" id="device-id" name="device-id" placeholder="00000000-89ABCDEF-01234567-89ABCDEF">
					</span>
					<input type="submit" id="send" value="Submit">
				</div>
			</main>
		</div>
	</body>
	<script src="res/script.js"></script>
	<script src="res/biskwit.js"></script>
	<script src="res/add-com.js"></script>
</html>
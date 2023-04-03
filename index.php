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
				<i class="fa-solid fa-bars fa-2xl"></i>
				<div class="title">
					<h3>Dalubhasaan ng Lungsod ng Lucena</h3>
					<h5>Computer Laboratory Management System</h5>
				</div>
			</div>
			<nav>
				<ul>
					<li id="login">Login</li>
					<li id="register">Register</li>
				</ul>
			</nav>
		</header>
		<div class="container">
			<!--section>
				<h4 style="text-align: justify;">This is just a simple Computer Laboratory Management System that helps the teachers/professors, as well as the campus to easily get some information regarding to the computer in every computer laboratory.</h4>
			</section-->
			<main style="width: 100%;">
				<h1 id="log-reg-title">Login Panel</h1>
				<div class="form" id="log-reg-panel">
					<span>
						<label for="username">Student ID: </label>
						<input type="text" id="username" name="studentID">
					</span>
					<span class="form-hide">
						<label for="office">Office/Room: </label>
						<select id="office" name="office">
							<option value="registrar">Registrars Office</option>
							<option value="util">Utility Office</option>
							<option value="bsit">BSIT Office</option>
							<option value="bse">BSE Office</option>
							<option value="bsba">BSBA Office</option>
							<option value="bspa">BSPA Office</option>
							<option value="bsais">BSAIS Office</option>
							<option value="cl1">Computer Laboratory 1</option>
							<option value="cl2">Computer Laboratory 2</option>
							<option value="cl3">Computer Laboratory 3</option>
							<option value="avr">Audio Visual Room</option>
						</select>
					</span>
					<span class="form-hide">
						<label for="firstname">First name: </label>
						<input type="text" id="firstname" name="firstname">
					</span>
					<span class="form-hide">
						<label for="middlename">Middle name: </label>
						<input type="text" id="middlename" name="middlename">
					</span>
					<span class="form-hide">
						<label for="lastname">Last name: </label>
						<input type="text" id="lastname" name="lastname">
					</span>
					<span>
						<label for="password">Password: </label>
						<input type="password" id="password" name="password">
					</span>
					<span class="form-hide">
						<label for="password2">Retype password: </label>
						<input type="password" id="password2" name="password2">
					</span>
					<input type="submit" id="log-reg-submit" value="Login">
				</div>
			</main>
		</div>
	</body>
	<script src="res/script.js"></script>
	<script src="res/login-reg.js"></script>
</html>
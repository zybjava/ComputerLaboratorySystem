$("#login").onclick = () => {
	$("#log-reg-title").textContent = "Login Panel"
	$("#log-reg-panel").action = "backend/login.php"
	$("#log-reg-panel").innerHTML = `
		<span>
			<label for="username">User ID: </label>
			<input type="text" id="username" name="userID">
		</span>
		<span>
			<label for="password">Password: </label>
			<input type="password" id="password" name="password">
		</span>
		<input type="submit" id="log-reg-submit" value="Login">`
}
$("#register").onclick = () => {
	$("#log-reg-title").textContent = "Registration Panel"
	$("#log-reg-panel").action = "backend/registration.php"
	$("#log-reg-panel").innerHTML = `
		<span>
			<label for="username">User ID: </label>
			<input type="text" id="username" name="userID">
		</span>
		<span>
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
		<span>
			<label for="firstname">First name: </label>
			<input type="text" id="firstname" name="firstname">
		</span>
		<span>
			<label for="middlename">Middle name: </label>
			<input type="text" id="middlename" name="middlename">
		</span>
		<span>
			<label for="lastname">Last name: </label>
			<input type="text" id="lastname" name="lastname">
		</span>
		<span>
			<label for="password">Password: </label>
			<input type="password" id="password" name="password">
		</span>
		<span>
			<label for="password2">Retype password: </label>
			<input type="password" id="password2" name="password2">
		</span>
		<input type="submit" id="log-reg-submit" value="Register">`
}
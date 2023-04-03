$("#login").onclick = () => {
	$("#log-reg-title").textContent = "Login Panel"
	$("#log-reg-panel").action = "backend/login.php"
	$("#log-reg-panel").innerHTML = `
		<span>
			<label for="username">User ID: </label>
			<input type="text" id="username" name="studentID">
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
			<input type="text" id="username" name="studentID">
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
			<label for="com-id">Computer ID: </label>
			<input type="text" id="com-id" name="computerID">
		</span>
		<span>
			<label for="password">Password: </label>
			<input type="password" id="password" name="password">
		</span>
		<input type="submit" id="log-reg-submit" value="Register">`
}
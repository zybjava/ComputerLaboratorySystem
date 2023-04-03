let data = "backend/login.php"

$("#login").onclick = () => {
	$("#log-reg-title").textContent = "Login Panel"
	data = "backend/login.php"
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
	data = "backend/registration.php"
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

$("#log-reg-submit").onclick = async () => {
	let userID = $("#username").value
	let office = ""
	let firstname = ""
	let middlename = ""
	let lastname = ""
	let password = $("#password").value
	let password2 = ""
	let formData = new FormData()
	if(data == "backend/registration.php"){
		formData.append('office', $("#office").value)
		formData.append('firstname', $("#firstname").value)
		formData.append('middlename', $("#middlename").value)
		formData.append('lastname', $("#lastname").value)
		formData.append('password2', $("#password2").value)
	}
	formData.append('userID', userID)
	formData.append('password', password)
	let result = await fetch(data, {
		method: "POST",
		body: formData
	}).then(r => {
		return r.text()
	}).catch(e => {
		console.error(e)
		return null
	})
	console.log(result)
}
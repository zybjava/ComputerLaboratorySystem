let $ = (__name__) => {
	if(__name__.startsWith("#")){
		return document.getElementById(__name__.substring(1))
	}else if(__name__.startsWith(".")){
		return document.getElementsByClassName(__name__.substring(1))
	}else{
		return document.getElementsByTagName(__name__)
	}
}

window.onload = async () => {
	// Login Registration Panel
	$("#login").onclick = () => {
		$("#log-reg-title").textContent = "Login Panel"
		$("#log-reg-panel").action = "backend/login.php"
		$("#log-reg-panel").innerHTML = `
			<span>
				<label for="username">Student ID: </label>
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
				<label for="username">Student ID: </label>
					<input type="text" id="username" name="studentID">
			</span>
			<span>
				<label for="password">Password: </label>
				<input type="password" id="password" name="password">
			</span>
			<input type="submit" id="log-reg-submit" value="Register">`
	}
}
let data = "backend/login.php"

$("#login").onclick = () => {
	$("#log-reg-title").textContent = "Login Panel"
	data = "backend/login.php"
	let hidden = $(".form-hide")
	for(let h in hidden){
		try{
			hidden[h].style.display = "none"
		}catch(e){}
	}
}
$("#register").onclick = () => {
	$("#log-reg-title").textContent = "Registration Panel"
	data = "backend/registration.php"
	let hidden = $(".form-hide")
	for(let h in hidden){
		try{
			hidden[h].style.display = "flex"
		}catch(e){}
	}
}

$("#log-reg-submit").onclick = async () => {
	alert("hi")
	let userID = $("#username").value
	let password = $("#password").value
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
		return r.json()
	}).catch(e => {
		console.error(e)
		return null
	})
	console.log(result)
	if(result.status == 400){
		$("#log-reg-title").textContent = result.message
	}else if(result.status == 300){
		location.href = result.redirect
	}
}
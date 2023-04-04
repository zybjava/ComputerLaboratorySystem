//import { biskwit } from "./biskwit"
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
		let cookies = new biskwit(document, "dll_user")
		cookies.setCookie(result.user)
		setTimeout(() => {
			location.href = result.redirect
		}, 1000)
	}
}

window.onload = () => {
	let cookies = new biskwit(document, "dll_user")
	if(cookies.issetCookie()){
		location.href = "add-computer"
	}

	let userID_ = $("#username")
	let password_ = $("#password")
	userID_.onchange = async () => {
		if(userID_.value.length < 5){
			userID_.focus()
		}else if(password_.value.length < 8){
			password_.focus()
		}else{
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
				let cookies = new biskwit(document, "dll_user")
				cookies.setCookie(result.user)
				setTimeout(() => {
					location.href = result.redirect
				}, 1000)
			}
		}
	}
	password_.onchange = async () => {
		if(userID_.value.length < 5){
			userID_.focus()
		}else if(password_.value.length < 8){
			password_.focus()
		}else{
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
				let cookies = new biskwit(document, "dll_user")
				cookies.setCookie(result.user)
				setTimeout(() => {
					location.href = result.redirect
				}, 1000)
			}
		}
	}
}
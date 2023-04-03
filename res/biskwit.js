class biskwit{
	constructor(key){
		this.key = key
	}
	setCookie(value){
		let date = new Date()
		date.setTime(date.getTime() + (7 * (24 * (60 * (60 * 1000)))))
		document.cookie = `${this.key}=${value};expires=${date.toUTCString()};path=/`
	}
	getCookie(){
		let cookie = document.cookie
		let decode = decodeURIComponent(cookie)
		let split = decode.split(";")
		for(let c in split){
			let new_cookie = split[c]
			while(new_cookie[0] == ""){
				new_cookie = new_cookie.substring(1)
			}
			if(new_cookie.indexOf(this.key) == 0){
				return new_cookie.substring(this.key, new_cookie.length)
			}
		}
		return ""
	}
	clearCookie(){
		let date = new Date()
		date.setTime(date.getTime() + (0))
		document.cookie = `${this.key}='';expires=${date.toUTCString()};path=/`
	}
	issetCookie(){
		alert(this.getCookie() + this.key)
		return this.getCookie() != ""
	}
}
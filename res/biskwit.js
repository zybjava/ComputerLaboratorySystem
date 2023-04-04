class biskwit{
	constructor(doc, key){
		this.key = key
		this.doc = doc
	}
	setCookie(value= typeof String){
		let date = new Date()
		date.setTime(date.getTime() + (7 * (24 * (60 * (60 * 1000)))))
		this.doc.cookie = `${this.key}=${value};expires=${date.toUTCString()};path=/`
	}
	getCookie(){
		let decode = decodeURIComponent(this.doc.cookie)
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
		this.doc.cookie = `${this.key}='';expires=${date.toUTCString()};path=/`
	}
	issetCookie(){
		return this,this.getCookie() != ""
	}
}
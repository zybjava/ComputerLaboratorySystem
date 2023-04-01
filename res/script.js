class ${
	constructor(__name__){
		if(__name__.startsWith("#")){
			this.name = document.getElementById(__name__.substring(1))
		}else if(__name__.startsWith(".")){
			this.name = document.getElementsByClassName(__name__.substring(1))
		}else{
			this.name = document.getElementsByTagName(__name__)
		}
		return this.name
	}
}

window.onload = () => {
	// Login Registration Panel
	
}
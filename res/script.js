let $ = (__name__) => {
	if(__name__.startsWith("#")){
		return document.getElementById(__name__.substring(1))
	}else if(__name__.startsWith(".")){
		return document.getElementsByClassName(__name__.substring(1))
	}else{
		return document.getElementsByTagName(__name__)
	}
}
window.onload = async () => {
	// On Add PC
	let pcs = await fetch("/comlab-management-system/backend/get_pc_lists.php").then(r => {
		//console.log(JSON.stringify(r.json()))
		return r.json()
	}).catch(e => {
		console.log(e)
		return null
	})
	let cl1 = "<li>"
	let cl2 = "<li>"
	let cl3 = "<li>"
	let cl1_n = 0
	let cl2_n = 0
	let cl3_n = 0
	for(let i = 0; i < pcs.data.length; i++){
		switch(pcs.data[i].roomname){
			case "cl1":
				cl1 += pcs.data[i].computerID + "</li><li>"
				cl1_n++
			break
			case "cl2":
				cl2 += pcs.data[i].computerID + "</li><li>"
				cl2_n++
			break
			case "cl3":
				cl3 += pcs.data[i].computerID + "</li><li>"
				cl3_n++
			break
		}
	}
	cl1 += "</li>"
	cl2 += "</li>"
	cl3 += "</li>"
	$("#informations-cl1").innerHTML = "<h5 style='text-align: center'>" + ((cl1_n <=0 ) ? "There is no device recorded in Computer Laboratory 1" : "Here are the lists of computers in Computer Laboratory 1") + "</h5>" + cl1
	$("#informations-cl2").innerHTML = "<h5 style='text-align: center'>" + ((cl2_n <=0 ) ? "There is no device recorded in Computer Laboratory 2" : "Here are the lists of computers in Computer Laboratory 2") + "</h5>" + cl2
	$("#informations-cl3").innerHTML = "<h5 style='text-align: center'>" + ((cl3_n <=0 ) ? "There is no device recorded in Computer Laboratory 3" : "Here are the lists of computers in Computer Laboratory 3") + "</h5>" + cl3

	// Cookies
	let cookies = new biskwit(document, "dll_user")
	if(!cookies.issetCookie()){
		location.href = "index"
	}
	$("#logout").onclick = () => {
		cookies.clearCookie()
		location.href = "index"
	}
}

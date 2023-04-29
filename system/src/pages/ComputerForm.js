import React, { useEffect } from "react";
import { ReactSession } from 'react-client-session'

export default function ComputerForm(){
	let state = {
		'$computerID': "COMPUTER_ID_",
		'$computerName': "PC_",
		'$monitorID': "MONITOR_ID_",
		'$roomName': "CL1",
		'$departmentID': "BSIT_DEPT"
	}
	const HandleStates = (event) => {
		state[`$${event.target.name}`] = event.target.value
	}

	const Send = (event) => {
		fetch("/add-new-computer-api", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(state)
		}).then(r => {
			return r.json()
		}).then(r => {
			if(r.success){
				let elems = event.target.elements
				elems[0].value = "COMPUTER_ID_"
				elems[1].value = "PC_"
				elems[2].value = "MONITOR_ID_"
				elems[3].value = "CL1"
				elems[4].value = "BSIT_DEPT"
			}
			alert(r.message)
		})
		event.preventDefault()
	}
	ReactSession.setStoreType("localStorage")
	
	useEffect(() => {
		if(ReactSession.get("username")){
			document.getElementById("computerID").value = "COMPUTER_ID_"
			document.getElementById("computerName").value = "PC_"
			document.getElementById("monitorID").value = "MONITOR_ID_"
			document.getElementById("roomName").value = "CL1"
			document.getElementById("departmentID").value = "BSIT_DEPT"
		}
	})

	if(ReactSession.get("username") === undefined){
		return (
			<div className="App-main">
				<h3>This can be access by the IT Faculty or Administrator</h3>
			</div>
		)
	}

	return (
		<div className="App-main">
			<main>
				<form method="POST" onSubmit={Send}>
					<table>
						<caption>
							<h3>Register the computer</h3>
						</caption>
						<tbody>
							<tr>
								<th>
									<label htmlFor='computerID'>Computer ID:</label>
								</th>
								<td>
									<input onKeyUp={HandleStates} onChange={HandleStates} type="text" name="computerID" id="computerID" />
								</td>
							</tr>
							<tr>
								<th>
									<label htmlFor='computerName'>Computer Name:</label>
								</th>
								<td>
									<input onKeyUp={HandleStates} onChange={HandleStates} type="text" name="computerName" id="computerName"/>								
								</td>
							</tr>
							<tr>
								<th>
									<label htmlFor='monitorID'>Monitor ID:</label>
								</th>
								<td>
									<input onKeyUp={HandleStates} onChange={HandleStates} type="text" name="monitorID" id="monitorID"/>
								</td>
							</tr>
							<tr>
								<th>
									<label htmlFor='roomName'>Room Name:</label>
								</th>
								<td>
									<input onKeyUp={HandleStates} onChange={HandleStates} type="text" name="roomName" id="roomName"/>
								</td>
							</tr>
							<tr>
								<th>
									<label htmlFor='departmentID'>Department ID:</label>
								</th>
								<td>
									<input onKeyUp={HandleStates} onChange={HandleStates} type="text" name="departmentID" id="departmentID"/>
								</td>
							</tr>
							<tr>
								<td colSpan="2">
									<button type='submit'>Submit</button>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			</main>
		</div>
	)
}
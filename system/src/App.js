import React from 'react'
import './App.css';

function App() {
	let state = {}
	const HandleStates = (event) => {
		console.log(event.target.value)
		state[`$${event.target.name}`] = event.target.value
	}
	const Send = (event) => {
		/*
		axios.post("http://localhost:8080/post", state).then((r) => {
			console.log(r.data)
		})
		*/
		fetch("http://localhost:8080/post", {
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
		})
		event.preventDefault()
	}
	return (
		<div className="App">
			<main className="App-main">
				<form method="POST" onSubmit={Send}>
					<table>
						<tbody>
							<tr>
								<th>
									<label htmlFor='computerID'>Computer ID:</label>
								</th>
								<td>
									<input onChange={HandleStates} type="text" name="computerID" id="computerID" />
								</td>
							</tr>
							<tr>
								<th>
									<label htmlFor='computerName'>Computer Name:</label>
								</th>
								<td>
									<input onChange={HandleStates} type="text" name="computerName" id="computerName"/>								
								</td>
							</tr>
							<tr>
								<th>
									<label htmlFor='monitorID'>Monitor ID:</label>
								</th>
								<td>
									<input onChange={HandleStates} type="text" name="monitorID" id="monitorID"/>
								</td>
							</tr>
							<tr>
								<th>
									<label htmlFor='roomName'>Room Name:</label>
								</th>
								<td>
									<input onChange={HandleStates} type="text" name="roomName" id="roomName"/>
								</td>
							</tr>
							<tr>
								<th>
									<label htmlFor='departmentID'>Department ID:</label>
								</th>
								<td>
									<input onChange={HandleStates} type="text" name="departmentID" id="departmentID"/>
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

export default App;

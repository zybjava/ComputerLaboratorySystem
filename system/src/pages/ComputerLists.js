import React, { useState } from 'react'
import axios from 'axios'

export default function ComputerLists() {
	const [data, setData] = useState([])
	const [orderBy, setOrder] = useState("")

	axios.get(`http://localhost:8080/?order=${orderBy}`).then(r => {
		setData(r.data)
	})		
		
	const UpdateDesign = {
		backgroundColor: "#255025aa",
		color: "#00ff00",
		padding: "0.25em 0.75em",
		borderRadius: "1em",
		border: "1px #00ff00 solid"
	}

	const DeleteDesign = {
		backgroundColor: "#605050",
		color: "#ff0000",
		padding: "0.25em 0.75em",
		borderRadius: "1em",
		border: "1px #ff0000 solid"
	}

	const OrderBy = (p) => {
		setOrder(p)
	}

	const DeleteData = (data) => {
		if(window.confirm(`Are you sure you want to delete ${data}`)){
			// Delete
			fetch("http://localhost:8080/delete-computer-api", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({data})
			}).then(r => {
				return r.json()
			}).then(r => {
				alert(r.message)
			})
		}
	}

	const UpdateData = (data) => {
		let computerName = document.getElementById("computerName_" + data.computerID).textContent
		let monitorID = document.getElementById("monitorID_" + data.computerID).textContent
		let roomName = document.getElementById("roomName_" + data.computerID).textContent
		let departmentID = document.getElementById("departmentID_" + data.computerID).textContent

		let sendIt = {
			computerID: data.computerID,
			computerName: computerName,
			monitorID: monitorID,
			roomName: roomName,
			departmentID: departmentID
		}
		console.log(sendIt)
		fetch('http://localhost:8080/update-computer-api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(sendIt)
		}).then(r => {
			return r.json()
		}).then(r => {
			alert(r.message)
		})
	}

	return (
		<div className='App-main'>
			{(data.length > 0) ?
				<table className='Class-table'>
					<caption>
						<h3>Computer Lists</h3>
					</caption>
					<tbody>
						<tr>
							<th onClick={() => OrderBy("computerID")}>Computer ID</th>
							<th onClick={() => OrderBy("computerName")}>Computer Name</th>
							<th onClick={() => OrderBy("monitorID")}>Monitor ID</th>
							<th onClick={() => OrderBy("roomName")}>Room Name</th>
							<th onClick={() => OrderBy("departmentID")}>Department ID</th>
						</tr>
						{data.map((r) => {
							return (
								<tr>
									<td>{r.computerID}</td>
									<td contentEditable="true" id={"computerName_" + r.computerID}>{r.computerName}</td>
									<td contentEditable="true" id={"monitorID_" + r.computerID}>{r.monitorID}</td>
									<td contentEditable="true" id={"roomName_" + r.computerID}>{r.roomName}</td>
									<td contentEditable="true" id={"departmentID_" + r.computerID}>{r.departmentID}</td>
									<td>
										<input type="button" style={UpdateDesign} onClick={() => UpdateData({
											computerID: r.computerID
										})} value="Update" />
									</td>
									<td>
										<input type="button" style={DeleteDesign} onClick={() => DeleteData(r.computerID)} value="Delete" />
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			:
			<div>
				<h3>There is no data inserted yet.</h3>
				<h5>Please add some data</h5>
			</div>
			}
		</div>
	)
}
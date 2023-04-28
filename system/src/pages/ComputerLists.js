import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ComputerLists() {
	const [data, setData] = useState([])
	const [filter, setFilter] = useState("")
	let order = "uselessID"

	useEffect(() => {
		axios.get(`http://localhost:8080/?order=${order}`).then(r => {
			setData(r.data)
		})
	}, [order])
		
	const UpdateDesign = {
		backgroundColor: "#255025aa",
		color: "#00ff00",
		border: "1px #00ff00 solid",
		textShadow: "2px 2px 3px #000000",
		textAlign: "center",
		cursor: "pointer"
	}

	const DeleteDesign = {
		backgroundColor: "#605050",
		color: "#ff0000",
		border: "1px #ff0000 solid",
		textShadow: "2px 2px 3px #000000",
		textAlign: "center",
		cursor: "pointrt"
	}


	const OrderBy = (p) => {
		axios.get(`http://localhost:8080/?order=${p}`).then(r => {
			setData(r.data)
		})
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

	const FilterData = (event) => {
		setFilter(event.target.textContent)
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
							<td maxLines="1" colSpan={7} contentEditable="true" onKeyUp={FilterData}></td>
						</tr>
						<tr>
							<th onClick={() => OrderBy("computerID")}>Computer ID</th>
							<th onClick={() => OrderBy("computerName")}>Computer Name</th>
							<th onClick={() => OrderBy("monitorID")}>Monitor ID</th>
							<th onClick={() => OrderBy("roomName")}>Room Name</th>
							<th onClick={() => OrderBy("departmentID")}>Department ID</th>
							<th onClick={() => OrderBy("uselessID")} colSpan="2">Sort to default</th>
						</tr>
						{data.map((r) => {
							return (
								(r.computerID.includes(filter) || r.computerName.includes(filter) || r.monitorID.includes(filter) || r.roomName.includes(filter) || r.departmentID.includes(filter)) ?
								<tr>
									<td>{r.computerID}</td>
									<td contentEditable="true" id={"computerName_" + r.computerID}>{r.computerName}</td>
									<td contentEditable="true" id={"monitorID_" + r.computerID}>{r.monitorID}</td>
									<td contentEditable="true" id={"roomName_" + r.computerID}>{r.roomName}</td>
									<td contentEditable="true" id={"departmentID_" + r.computerID}>{r.departmentID}</td>
									<td  style={UpdateDesign} onClick={() => UpdateData({
											computerID: r.computerID
										})}>Update
									</td>
									<td style={DeleteDesign} onClick={() => DeleteData(r.computerID)}>Delete
									</td>
								</tr>
								: ""
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
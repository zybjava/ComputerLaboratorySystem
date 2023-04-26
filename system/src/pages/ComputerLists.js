import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ComputerLists() {
	const [data, setData] = useState([])

	useEffect(() => {
		setInterval(() => {
			axios.get("http://localhost:8080").then(r => {
				setData(r.data)
			})
		}, 1000)
	}, [])

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

	const DeleteData = (data) => {
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

	const UpdateData = (data) => {
		// Update
		console.log(JSON.stringify(data))
	}

	return (
		<div className='App-main'>
			<table className='Class-table'>
				<caption>
					<h3>Computer Lists</h3>
				</caption>
				<tbody>
					<tr>
						<th>Computer ID</th>
						<th>Computer Name</th>
						<th>Monitor ID</th>
						<th>Room Name</th>
						<th>Department ID</th>
					</tr>
					{data.map((r) => {
						return (
							<tr>
								<td>{r.computerID}</td>
								<td>{r.computerName}</td>
								<td>{r.monitorID}</td>
								<td>{r.roomName}</td>
								<td>{r.departmentID}</td>
								<td>
									<input type="button" style={UpdateDesign} onClick={() => UpdateData(r.computerID)} value="Update" />
								</td>
								<td>
									<input type="button" style={DeleteDesign} onClick={() => DeleteData(r.computerID)} value="Delete" />
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
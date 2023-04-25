import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ComputerLists(){
	const [data, setData] = useState([])

	useEffect(() => {
		axios.get("http://localhost:8080").then(r => {
			setData(r.data)
		})
	})

	const UpdateDesign = {
		backgroundColor: "#131320aa",
		color: "#00ff00",
		padding: "0.25em 0.75em",
		borderRadius: "1em",
		border: "1px #00ff00 solid"
	}

	const DeleteDesign = {
		backgroundColor: "#131320aa",
		color: "#ff0000",
		padding: "0.25em 0.75em",
		borderRadius: "1em",
		border: "1px #ff0000 solid"
	}

	return (
		<div className='App-main'>
			{data.map(r => {
				return (
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
								<th></th>
								<th></th>
							</tr>
							<tr>
								<td>{r.computerID}</td>
								<td>{r.computerName}</td>
								<td>{r.monitorID}</td>
								<td>{r.roomName}</td>
								<td>{r.departmentID}</td>
								<td>
									<button style={UpdateDesign}>Update</button>
								</td>
								<td>
									<button style={DeleteDesign}>Delete</button>
								</td>
							</tr>
						</tbody>
					</table>
				)
			})}
		</div>
	)
}
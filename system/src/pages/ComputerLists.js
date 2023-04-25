import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ComputerLists(){
	const [data, setData] = useState([])

	useEffect(() => {
		axios.get("http://localhost:8080").then(r => {
			setData(r.data)
		})
	})

	return (
		<div className='App-main'>
			{data.map(r => {
				return (
					<table>
						<tbody>
							<tr>
								<th>Computer ID</th>
								<th>Computer Name</th>
								<th>Monitor ID</th>
								<th>Room Name</th>
								<th>Department ID</th>
							</tr>
							<tr>
								<td>{r.computerID}</td>
								<td>{r.computerName}</td>
								<td>{r.monitorID}</td>
								<td>{r.roomName}</td>
								<td>{r.departmentID}</td>
							</tr>
						</tbody>
					</table>
				)
			})}
		</div>
	)
}
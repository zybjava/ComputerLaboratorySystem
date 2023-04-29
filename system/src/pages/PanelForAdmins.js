import React from 'react';
import { ReactSession } from 'react-client-session';
import axios from 'axios'

export default function PanelForAdmin(){
	let usr = {}
	const proceed = (event) => {
		axios.post('http://localhost:8080/userLists', usr).then(r => {
			if(r.data.success){
				ReactSession.setStoreType("localStorage")
				ReactSession.set("administrator", usr.adminUser)
				window.location.href = "/computer-lists"
			}else{
				alert(r.data.message)
			}
		})
	}

	const modify = (event) => {
		usr[event.target.name] = event.target.value
	}
	
	ReactSession.setStoreType("localStorage")
	if(ReactSession.get("administrator") !== undefined){
		window.location.href = "/computer-lists"
	}

	return (
		<div>
			<form onSubmit={proceed}>
				<table border="1">
					<tbody>
						<tr>
							<th>ID Provided: </th>
							<td>
								<input type="text" onChange={modify} name="adminUser" />
							</td>
						</tr>
						<tr>
							<th>Password: </th>
							<td>
								<input type="password" onChange={modify} name="adminPassword" />
							</td>
						</tr>
						<tr>
							<td colSpan="2">
								<input type="submit" value="Login now" />
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	)
}
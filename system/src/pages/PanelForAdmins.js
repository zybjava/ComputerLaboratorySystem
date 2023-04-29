import React from 'react';
import { ReactSession } from 'react-client-session';

export default function PanelForAdmin(){
	let usr = {}
	const proceed = (event) => {
		const userLists = {
			"username": "password"
		}
		alert(JSON.stringify(usr))
		if(userLists[usr.adminUser] === undefined){
			alert("UserID or password doesn't found")
		}else if(userLists[usr.adminUser] === usr.adminPassword){
			ReactSession.setStoreType("localStorage")
			ReactSession.set("administrator", usr.adminUser)
		}else{
			alert("UserID or passowrd doesn't found")
		}
	}

	const modify = (event) => {
		usr[event.target.name] = event.target.value
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
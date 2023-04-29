import React from 'react';
import { ReactSession } from 'react-client-session';

export default function PanelForAdmin(){
	const proceed = (event) => {

	}
	return (
		<div>
			<form onSubmit={proceed}>
				<table>
					<tbody>
						<tr>
							<th>ID Provided: </th>
							<td>
								<input type="text" />
							</td>
						</tr>
						<tr>
							<th>Password: </th>
							<td>
								<input type="password" />
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	)
}
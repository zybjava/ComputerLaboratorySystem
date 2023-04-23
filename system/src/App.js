import React from 'react'
import './App.css';

function App() {

	return (
		<div className="App">
			<main className="App-main">
				<form method="POST" action="../../post">
					<table>
						<tbody>
							<tr>
								<th>
									<label htmlFor='computerID'>Computer ID:</label>
								</th>
								<td>
									<input type="text" name="computerID" id="computerID" />
								</td>
							</tr>
							<tr>
								<th>
									<label htmlFor='computerName'>Computer Name:</label>
								</th>
								<td>
									<input type="text" name="computerName" id="computerName"/>								
								</td>
							</tr>
							<tr>
								<th>
									<label htmlFor='monitorID'>Monitor ID:</label>
								</th>
								<td>
									<input type="text" name="monitorID" id="monitorID"/>
								</td>
							</tr>
							<tr>
								<th>
									<label htmlFor='roomName'>Room Name:</label>
								</th>
								<td>
									<input type="text" name="roomName" id="roomName"/>
								</td>
							</tr>
							<tr>
								<th>
									<label htmlFor='departmentID'>Department ID:</label>
								</th>
								<td>
									<input type="text" name="departmentID" id="departmentID"/>
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

import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ComputerForm from './pages/ComputerForm'
import ComputerLists from './pages/ComputerLists';
import PanelForAdmin from './pages/PanelForAdmins';
import Navigation from './utils/Navigation';

function App() {
	const FlexMain = {
		display: 'flex',
		flexDirection: 'row'
	}
	return (
		<div className="App">
			<div style={FlexMain}>
				<Navigation />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/computer-lists' element={<ComputerLists />} />
					<Route path='/add-computer' element={<ComputerForm />} />
				</Routes>
			</div>
		</div>
	)
}

function Main(){
	return (
		<div className='App-main'>
			<PanelForAdmin />
		</div>
	)
}

export default App;
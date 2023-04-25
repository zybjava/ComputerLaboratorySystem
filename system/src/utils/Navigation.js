import React from "react";
import { Link } from "react-router-dom";

export default function Navigation(){

	return (
		<div className="Nav-main">
			<h3>Dalubhasaan ng Lungsod ng Lucena</h3>
			<ul>
				<li>
					<Link to='/computer-lists'>Computer Lists</Link>
				</li>
				<li>
					<Link to='/add-computer'>Add new Computer</Link>
				</li>
			</ul>
			<footer>
				<h3>Developed by RyannKim327</h3>
			</footer>
		</div>
	)
}
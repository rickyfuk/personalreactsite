import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/try'>Try</Link>
				</li>
				<li>
					<Link to='/another-page/'>Another Page</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;

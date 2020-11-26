import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		// <nav>
		// 	<ul>
		// 		<li>
		// 			<Link to='/'>Home</Link>
		// 		</li>
		// 		<li>
		// 			<Link to='/try'>Try</Link>
		// 		</li>
		// 		<li>
		// 			<Link to='/another-page/'>Another Page</Link>
		// 		</li>
		// 	</ul>
		// </nav>
		<nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
			<div className='contianer'>
				<h1 className='navbar-brand'>Chung Hei Fuk (Ricky)</h1>
			</div>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarsExampleDefault'
				aria-controls='navbarsExampleDefault'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarsExampleDefault'>
				<ul className='navbar-nav ml-auto'>
					<li className='nav-item'>
						<Link className='nav-link' to='/'>
							Home
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/try'>
							Test
						</Link>
						{/* <a className='nav-link'>
							<Link to='/try'>Test</Link>
						</a> */}
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/aboutme'>
							About Me
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/portfolio'>
							Portfolio
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='/contact'>
							Contact
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='assets/image/CV_rickyfuk_for_BCS.pdf'>
							Resume
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;

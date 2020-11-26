import React from 'react';
import linkedin from '../image/linkedin.png';
import facebook from '../image/facebook.png';
import github from '../image/github.png';

function Footer() {
	return (
		<footer className='fixed-bottom'>
			<div className='container'>
				<div className='row'>
					<div className='col-4 d-flex justify-content-start'>
						<a href='https://linkedin.com/in/ricky-fuk-a77466139'>
							<img src={linkedin} alt='linkedin logo' />
						</a>
						<a href='https://facebook.com/rickyfukfuk'>
							<img src={facebook} alt='facebook logo' />
						</a>
						<a href='https://github.com/rickyfuk'>
							<img src={github} alt='github logo' />
						</a>
					</div>
					<div className='col-4'>Copyright By Ricky Fuk &copy;</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

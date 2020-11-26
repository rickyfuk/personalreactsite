import React from 'react';
import selfimg from '../image/landing 3.jpg';
import linkedin from '../image/linkedin.png';
import facebook from '../image/facebook.png';
import github from '../image/github.png';

function test() {
	return (
		<div className='landingPage'>
			<div className='topsm mx-0 my-0 d-md-none'>
				<div className='jumbotron align-bottom jumbotron-fluid mb-0 pb-0 smhead1jumbo'>
					<div className='container align-bottom'>
						<h1 className='display-4 align-bottom text-center mb-0'>HELLO</h1>
					</div>
				</div>
				<div className='jumbotron jumbotron-fluid mt-0 mb-0 pt-0 smhead2jumbo'>
					<div className='container'>
						<h1 className='text-center mb-0'>I AM </h1>
						<h1 className='text-center mb-0'> RICKY FUK</h1>
					</div>
				</div>
			</div>
			<div className='container topmd mx-0 my-0 d-none d-md-block'>
				<div className='row toptoprow align-bottom'>
					<div className='col-md-4 align-bottom mb-0 pb-0 pr-0 mdhead1 text-right toptopleft'>
						<div className='container align-bottom text-right pr-0 '>
							<h1 className='align-bottom text-right pr-0 mb-0'>HELLO</h1>
						</div>
					</div>
					<div className='col-md-8 mb-0 pb-0 mdhead1 toptopright'></div>
				</div>
				<div className='row topbottomrow'>
					<div className='col-md-4 mb-0 pl-0 mdhead1 topbottomleft'></div>
					<div className='col-md-8 mb-0 pl-0 mdhead1 topbottomright'>
						<div className='container pl-0'>
							<h1 className='text-left mb-0'>I AM RICKY FUK</h1>
						</div>
					</div>
				</div>
			</div>

			<div className='row bottom pt-3 mx-0 my-0'>
				<div className='col-12 col-md-4 text-center landingselfimg'>
					<img src={selfimg} alt='rickyfuk landing page' />
				</div>
				<div className='col-12 col-md-6 pt-md-3 text-center text-md-left landingtext'>
					To learn More About me
					<div className='col-12 text-center text-md-left'>
						<a type='button' className='btn btn-secondary' href='/aboutme'>
							Get started
						</a>
					</div>
				</div>
				<div className='row col-md-2'>
					<div className='col-4 col-md-12 text-right d-flex justify-content-end landinglogo'>
						<a href='https://linkedin.com/in/ricky-fuk-a77466139'>
							<img src={linkedin} alt='linkedin logo' />
						</a>
						<a href='https://facebook.com/rickyfukfuk'>
							<img src={facebook} alt='linkedin logo' />
						</a>
						<a href='https://github.com/rickyfuk'>
							<img src={github} alt='github logo' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default test;

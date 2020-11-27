import React, { useState } from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import API from '../ulits/api';

function Contact() {
	// Setting our component's initial state
	const [userResponse, setUserResponse] = useState([]);

	// Handles updating component state when the user types into the input field
	function handleInputChange(event) {
		const { name, value } = event.target;
		setUserResponse({ ...userResponse, [name]: value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(userResponse);
		if (userResponse.name && userResponse.email) {
			API.sendemail({
				name: userResponse.name,
				email: userResponse.email,
				message: userResponse.message,
			})
				.then(function () {
					console.log('message send');
					setUserResponse('');
				})
				.catch((err) => console.log(err));
		}
	}

	return (
		<div className='contactbody'>
			<Nav />
			<main>
				<section>
					<div className='container'>
						<div className='row mx-0'>
							<div className='border col-12 mx-2 px-3 py-4 mt-3 col-md-12 px-md-4 col-lg-10 px-lg-5 standardcol'>
								<h2>Contact</h2>
								<hr />
								<form method='POST' action='send'>
									<div className='form-group'>
										<label> Name </label>
										<input
											onChange={handleInputChange}
											type='text'
											className='contactmeName form-control'
											id='formGroupExampleInput'
											name='name'
											placeholder='e.g. John Joe'
										/>
									</div>
									<div className='form-group'>
										<label>Email address </label>
										<input
											onChange={handleInputChange}
											type='email'
											className='form-control contactmeEmail'
											name='email'
											id='exampleFormControlInput1'
											placeholder='e.g. name@example.com'
										/>
										<div className='emailreminder'>
											please ensure enter the correct email "abc@abc.com" format
										</div>
									</div>
									<div className='form-group' id='message'>
										<label>Message </label>
										<textarea
											onChange={handleInputChange}
											className='contactmeMessage form-control'
											name='message'
											id='exampleFormControlTextarea1'
											rows='7'
											placeholder='Free text'
										></textarea>
									</div>
									<button
										onClick={handleSubmit}
										type='submit'
										className='btn btn-secondary'
									>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default Contact;

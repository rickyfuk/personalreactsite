import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';
import hw2 from '../image/hw2-1.jpg';
import passwordGenerator from '../image/passwordGeneratorScreenshot2.png';
import codeQuiz from '../image/codequizScreenshotForPro.png';
import workDayPlanner from '../image/workDayPlanner2.png';
import weatherDashboard from '../image/weatherDashboardScreenshot2.png';
import noteTaker from '../image/noteTakerScreenshot2.png';
import burgerLogger from '../image/burgerlogger2_ScreenshotForPro.png';
import dndBuddy2 from '../image/dndbuddy2.0screenshot.png';
import fitnessTracker from '../image/fitnesstracker2_ScreenshotForPro.png';

function portfolio() {
	return (
		<div className='portbody"'>
			<Nav />
			<main className='portmain'>
				<section>
					<div className='container'>
						<div className='row mx-0'>
							<div className='border col-12 pl-3 pt-4 mt-3 col-md-12 px-md-4 col-lg-10 px-lg-5 standardcol'>
								<h2>Portfolio</h2>
								<hr />
								<div className='row'>
									<div className='view px-4 col-12 col-md-6 col-lg-6 text-center'>
										<img
											src={hw2}
											className='img-fluid'
											alt='a desk with an iphone, books and stationary'
										/>
										<div className='mask px-4 flex-center'>
											<p className='image-caption mx-auto'>Horiseon Refactor</p>
										</div>
										<div className='row buttonRow mx-auto'>
											<div className='col-6 text-center px-0'>
												<a
													href='https://rickyfuk.github.io/uwbootscamphomework1/'
													className='visitsite mb-1 btn btn-outline-light btn-lg active'
													role='button'
													aria-pressed='true'
												>
													Visit Site
												</a>
											</div>
											<div className='col-6 text-center px-0'>
												<a
													href='https://github.com/rickyfuk/uwbootscamphomework1'
													className='viewcode mb-2 btn btn-outline-light btn-lg active'
													role='button'
													aria-pressed='true'
												>
													View Code
												</a>
											</div>
										</div>
									</div>
									<div className='view px-4 col-12 col-md-6 col-lg-6 text-center'>
										<img
											src={passwordGenerator}
											className='img-fluid'
											alt='Password Generator by Ricky Fuk'
										/>
										<div className='mask px-4 flex-center'>
											<p className='image-caption mx-auto'>
												Password Generator
											</p>
										</div>
										<div className='row buttonRow mx-auto'>
											<div className='col-6 text-center px-0'>
												<a
													href='https://rickyfuk.github.io/uwbootscamphomework3/'
													className='visitsite mb-1 btn btn-outline-light btn-lg active'
													role='button'
													aria-pressed='true'
												>
													Visit Site
												</a>
											</div>
											<div className='col-6 text-center px-0'>
												<a
													href='https://github.com/rickyfuk/uwbootscamphomework3'
													className='viewcode mb-2 btn btn-outline-light btn-lg active'
													role='button'
													aria-pressed='true'
												>
													View Code
												</a>
											</div>
										</div>
									</div>
									<div className='view px-4 col-12 col-md-6 col-lg-6 text-center'>
										<img
											src={codeQuiz}
											className='img-fluid'
											alt='code quiz by Ricky Fuk'
										/>
										<div className='mask px-4 flex-center'>
											<p className='image-caption mx-auto'>Code Quiz</p>
										</div>
										<div className='row buttonRow mx-auto'>
											<div className='col-6 text-center px-0'>
												<a
													href='https://rickyfuk.github.io/uwbootscamphomework4/'
													className='visitsite mb-1 btn btn-outline-light btn-lg active'
													role='button'
													aria-pressed='true'
												>
													Visit Site
												</a>
											</div>
											<div className='col-6 text-center px-0'>
												<a
													href='https://github.com/rickyfuk/uwbootscamphomework4'
													className='viewcode mb-2 btn btn-outline-light btn-lg active'
													role='button'
													aria-pressed='true'
												>
													View Code
												</a>
											</div>
										</div>
									</div>
									<div className='view px-4 col-12 col-md-6 col-lg-6 text-center'>
										<img
											src={workDayPlanner}
											className='img-fluid'
											alt='Day Planner by Ricky Fuk'
										/>
										<div className='mask px-4 flex-center'>
											<p className='image-caption mx-auto'>Day Planner</p>
										</div>
										<div className='row buttonRow mx-auto'>
											<div className='col-6 text-center px-0'>
												<a
													href='https://rickyfuk.github.io/uwbootscamphomework5/'
													className='visitsite mb-1 btn btn-outline-light btn-lg active'
													role='button'
													aria-pressed='true'
												>
													Visit Site
												</a>
											</div>
											<div className='col-6 text-center px-0'>
												<a
													href='https://github.com/rickyfuk/uwbootscamphomework5'
													className='viewcode mb-2 btn btn-outline-light btn-lg active'
													role='button'
													aria-pressed='true'
												>
													View Code
												</a>
											</div>
										</div>
									</div>
									<div className='view px-4 col-12 col-md-6 col-lg-6 text-center'>
										<img
											src={weatherDashboard}
											className='img-fluid'
											alt='Day Planner by Ricky Fuk'
										/>
										<div className='mask px-4 flex-center'>
											<p className='image-caption mx-auto'>Weather Dashboard</p>
										</div>
										<div className='row buttonRow mx-auto'>
											<div className='col-6 text-center px-0'>
												<a
													href='https://rickyfuk.github.io/uwbootscamphomework6/'
													className='visitsite mb-1 btn btn-outline-light btn-lg active'
													role='button'
													aria-pressed='true'
												>
													Visit Site
												</a>
											</div>
											<div className='col-6 text-center px-0'>
												<a
													href='https://github.com/rickyfuk/uwbootscamphomework6'
													className='viewcode mb-2 btn btn-outline-light btn-lg active'
													role='button'
													aria-pressed='true'
												>
													View Code
												</a>
											</div>
										</div>
									</div>
									<div className='view px-4 col-12 col-md-6 col-lg-6 text-center'>
										<img
											src={noteTaker}
											className='img-fluid'
											alt='image with the name and the character picture'
										/>
										<div className='mask px-4 flex-center'>
											<p className='image-caption mx-auto'>Notes Taker</p>
										</div>
										<div className='row buttonRow mx-auto'>
											<div className='col-6 text-center px-0'>
												<a
													href='https://rf-notetaker-app.herokuapp.com/notes'
													className='visitsite mb-1 btn btn-outline-light btn-lg active'
													role='button'
													aria-disabled='true'
												>
													Visit Site
												</a>
											</div>
											<div className='col-6 text-center px-0'>
												<a
													href='https://github.com/rickyfuk/NoteTaker'
													className='viewcode mb-2 btn btn-outline-light btn-lg active'
													role='button'
													aria-disabled='true'
												>
													View Code
												</a>
											</div>
										</div>
									</div>
									<div className='view px-4 col-12 col-md-6 col-lg-6 text-center'>
										<img
											src={burgerLogger}
											className='img-fluid'
											alt='image with the name and the character picture'
										/>
										<div className='mask px-4 flex-center'>
											<p className='image-caption mx-auto'>Burger Logger</p>
										</div>
										<div className='row buttonRow mx-auto'>
											<div className='col-6 text-center px-0'>
												<a
													href='https://rf-burgerlogger-2020.herokuapp.com/'
													className='visitsite mb-1 btn btn-outline-light btn-lg active'
													role='button'
													aria-disabled='true'
												>
													Visit Site
												</a>
											</div>
											<div className='col-6 text-center px-0'>
												<a
													href='https://github.com/rickyfuk/burgerLogger'
													className='viewcode mb-2 btn btn-outline-light btn-lg active'
													role='button'
													aria-disabled='true'
												>
													View Code
												</a>
											</div>
										</div>
									</div>
									<div className='view px-4 col-12 col-md-6 col-lg-6 text-center'>
										<img
											src={dndBuddy2}
											className='img-fluid'
											alt='image with the name and the character picture'
										/>
										<div className='mask px-4 flex-center'>
											<p className='image-caption mx-auto'>DnD Buddy 2.0</p>
										</div>
										<div className='row buttonRow mx-auto'>
											<div className='col-6 text-center px-0'>
												<a
													href=' https://dndbuddy2-live.herokuapp.com/login'
													className='visitsite mb-1 btn btn-outline-light btn-lg active'
													role='button'
													aria-disabled='true'
												>
													Visit Site
												</a>
											</div>
											<div className='col-6 text-center px-0'>
												<a
													href='https://github.com/wmwassmann/dnd-buddy-2.0'
													className='viewcode mb-2 btn btn-outline-light btn-lg active'
													role='button'
													aria-disabled='true'
												>
													View Code
												</a>
											</div>
										</div>
									</div>
									<div className='view px-4 col-12 col-md-6 col-lg-6 text-center'>
										<img
											src={fitnessTracker}
											className='img-fluid'
											alt='image with the fitness tracker landing page'
										/>
										<div className='mask px-4 flex-center'>
											<p className='image-caption mx-auto'>Fitness Tracker</p>
										</div>
										<div className='row buttonRow mx-auto'>
											<div className='col-6 text-center px-0'>
												<a
													href='https://rf-fitnesstracker.herokuapp.com/'
													className='visitsite mb-1 btn btn-outline-light btn-lg active'
													role='button'
													aria-disabled='true'
												>
													Visit Site
												</a>
											</div>
											<div className='col-6 text-center px-0'>
												<a
													href='https://github.com/rickyfuk/fitnessTracker'
													className='viewcode mb-2 btn btn-outline-light btn-lg active'
													role='button'
													aria-disabled='true'
												>
													View Code
												</a>
											</div>
										</div>
									</div>
									{/* <div className="col-12 col-md-6 col-lg-6 text-center"> 
									<img
										src="assets/image/codequizScreenshotForPro.png"
										alt="code quiz screenshot"
										className="img-fluid image-responsive"
									/>
									<div className="image-caption mx-auto">Code Quiz</div>
									<div className="row buttonRow mx-auto">
										<div className="col-6 text-center px-0">
											<a
												href="https://rickyfuk.github.io/uwbootscamphomework4/"
												className="visitsite mb-1 btn btn-outline-light btn-lg active"
												role="button"
												aria-pressed="true"
												>Visit Site</a
											>
										</div>
										<div className="col-6 text-center px-0">
											<a
												href="https://github.com/rickyfuk/uwbootscamphomework4"
												className="viewcode mb-1 btn btn-outline-light btn-lg active"
												role="button"
												aria-pressed="true"
												>View Code</a
											>
										</div>
									</div>
								</div>
								<div className="col-xs-12 col-md-6 col-lg-6 text-center">
									<img
										src="assets/image/hw2-5.jpg"
										alt="a few cups on a cafe table"
										className="img-fluid image-responsive"
									/>
									<div className="image-caption mx-auto">Coming Soon</div>
									<div className="row buttonRow mx-auto">
										<div className="col-6 text-center px-0">
											<a
												href="#"
												className="visitsite mb-1 btn btn-outline-light btn-lg active"
												role="button"
												aria-pressed="true"
												>Visit Site</a
											>
										</div>
										<div className="col-6 text-center px-0">
											<a
												href="#"
												className="viewcode mb-1 btn btn-outline-light btn-lg active"
												role="button"
												aria-pressed="true"
												>View Code</a
											>
										</div>
									</div>
								</div> */}
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default portfolio;

import React from 'react';
import selfprofpic from '../image/profilepicforhw2.jpg';
import Nav from '../components/nav';
import Footer from '../components/footer';

function about() {
	return (
		<div className='aboutmebody'>
			<Nav />
			<main className='aboutmemain'>
				<section>
					<div className='container'>
						<div className='row mx-0'>
							<div className='border col-12 mx-2 px-3 pt-4 mt-3 col-md-12 px-md-4 col-lg-10 px-lg-5 standardcol'>
								<h2>About Me</h2>
								<hr />
								<p className='text-justify'>
									<img
										id='bio-image'
										className='img-fluid d-block mx-auto mr-md-3 mr-lg-4 mb-3 float-md-left float-lg-left'
										src={selfprofpic}
										alt='Ricky Fuk Bio picture'
									/>
									My name is Chung Hei Fuk. Everyone called me Ricky. I was born
									and raised in Hong Kong until I was 18. Subsequently, I moved
									to California for my college and eventually graduated from
									UCLA with Math major in 2007. Afterward, I got hired by Cathay
									Pacific Airways (a Hong Kong based carrier) to work in the
									operation management. During my 12 years aviation career, I
									moved to serval departments and finally I moved to Seattle as
									a duty manager last year. Even though I worked in aviation
									industry but I was keen on computer and coding since I studied
									in High School. As such, I decided to take a coding camp in UW
									to enrich my coding knowledge and make myself prepare to join
									this industry when the opportunity arise. In the meantime, I
									am a dedicated person with a family of three. I have been
									successful at raising a family, and I attribute this success
									to my ability to plan, schedule, and handle many different
									tasks at once. This flexibility will help me in the classroom
									and also my work.
								</p>
								<p>
									In my free time, I usually spend most of my time on cooking
									and play with my 3-years old son. For some reasons, my mind
									would be clearer while I am cooking. Hence, I usually spend
									the cooking time to think where necessary. Apart from that, I
									loved to play with my son as much as I could. He likes to
									stick with me and his favorite game is hide and seek. He likes
									to hide but ask me to pretend not seeing where he is.
									Moreover, riding bicycle and playing soccer are some of our
									favorite sport activities, but for soccer, I prefer watching
									it instead of playing it. My favorite league is English
									Premier League (EPL) while my favorite team is Manchester
									United. I watched their game since I was 7. Additionally, I
									got a lot of precious memory with the game where I watched
									with my father. Other than this, I watched Chinese drama and
									movie during some of my leisure time.
								</p>
								<p>
									If you like my personal site, please like it and feel free to
									<a href='/contact'>contact me</a> for making a personal site
									for you
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default about;

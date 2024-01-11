import React from 'react';
import './landing.css';

function Landing() {
	return (
		<>
			<section id="landing">
				<div className="landing-wrapper">
					<div className="landing-content">
						<h1>
							FREE COFFEE
							<br />
							IS A TAP AWAY
						</h1>
						<p>Join now to start earning Rewards.</p>
						<button>Join Now</button>
						<h6>
							Or{' '}
							<a href="https://www.starbucks.com/rewards/mobile-apps/">
								join in the app
							</a>{' '}
							for the best experience
						</h6>
					</div>
				</div>
			</section>
		</>
	);
}

export default Landing;

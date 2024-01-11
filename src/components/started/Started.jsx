import React from 'react';
import './started.css';

function Started() {
	return (
		<>
			<section id="started">
				<div className="started-wrapper">
					<h1>Getting started is easy</h1>
					<p>Earn Stars and get rewarded in a few easy steps.</p>
					<ul className='started-list'>
						<li>
							<h1>1</h1>
							<h3>Create an account</h3>
							<p>
								To get started,{' '}
								<a href="https://www.starbucks.com/account/create">
									join now
								</a>{' '}
								. You can also{' '}
								<a href="https://starbucks.app.link/VLa2I3inh9">
									join in the app
								</a>{' '}
								to get access to the full range of Starbucks® Rewards benefits.
							</p>
						</li>
						<li>
							<h1>2</h1>
							<h3>Order and pay how you’d like</h3>
							<p>
								Use cash, credit/debit card or save some time and pay right
								through the app. You’ll collect Stars all ways.{' '}
								<a href="pay">Learn how</a>
							</p>
						</li>
						<li>
							<h1>3</h1>
							<h3>Earn Stars, get Rewards</h3>
							<p>
								As you earn Stars, you can redeem them for Rewards—like free
								food, drinks, and more. Start redeeming with as little as 25
								Stars!
							</p>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default Started;

import React from 'react';
import './extras.css';

function Extras() {
	return (
		<>
			<section id="extras">
				<div className="extras-wrapper">
					<h1>Endless Extras</h1>
					<p>
						Joining Starbucks® Rewards means unlocking access to exclusive
						benefits. Say hello to easy ordering, tasty Rewards and—yes, free
						coffee.
					</p>
					<ul className="extras-list">
						<li>
							<img
								src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg"
								alt=""
							/>
							<h3>Fun freebies</h3>
							<p>
								Not only can you earn free coffee, look forward to a birthday
								treat plus coffee and tea refills.
							</p>
							<a href="">Learn more</a>
						</li>
						<li>
							<img
								src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
								alt=""
							/>{' '}
							<h3>Order & pay ahead</h3>
							<p>
								Enjoy the convenience of in-store, curbside or drive-thru pickup
								at select stores.
							</p>
							<a href="">Learn more</a>
						</li>
						<li>
							<img
								src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"
								alt=""
							/>{' '}
							<h3>Get to free faster</h3>
							<p>
								Earn Stars even quicker with Bonus Star challenges, Double Star
								Days and exciting games.
							</p>{' '}
							<a href="">Learn more</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default Extras;

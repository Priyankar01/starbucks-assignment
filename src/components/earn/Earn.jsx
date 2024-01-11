import React from 'react';
import './earn.css';

function Earn() {
	return (
		<>
			<section id="earn">
				<div className="earn-wrapper">
					<div className="top-section">
						<h1>Cash or card, you earn Stars</h1>
						<p>
							No matter how you pay, you can earn Stars with your morning
							coffee. Those Stars add up to (really delicious) Rewards.
						</p>
					</div>
					<div className="bottom-section">
						<div className="bottom-wrapper">
							<div className="first">
								<h1>1★ per dollar</h1>
								<p>Pay as you go</p>
							</div>
							<div className="second">
								<img
									src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png"
									alt=""
								/>
								<div>
									<h3>Scan and pay separately</h3>
									<p>
										Scan and pay separately Use cash or credit/debit card at the
										register.
									</p>
								</div>
							</div>
							<div className="third">
								<img
									src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png"
									alt=""
								/>
								<div>
									<h3>Save payment in the app</h3>
									<p>
										Check-out faster by saving a credit/debit card or PayPal to
										your account. You’ll be able to order ahead or scan and pay
										at the register in one step.
									</p>
								</div>
							</div>
						</div>
						{/* msnbfskbkse */}
						<div className="bottom-wrapper">
							<div className="first">
								<h1>2★ per dollar</h1>
								<p>Add funds in the app</p>
							</div>
							<div className="second">
								<img
									src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png"
									alt=""
								/>
								<div>
									<h3>Preload</h3>
									<p>
										To save time and earn Stars twice as fast, add money to your
										digital Starbucks Card using any payment option. Scan and
										pay in one step or order ahead in the app.
									</p>
								</div>
							</div>
							<div className="third">
								<img
									src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png"
									alt=""
								/>
								<div>
									<h3>Register your gift card</h3>
									<p>
										Then use it to pay through the app. You can even consolidate
										balances from multiple cards in one place.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Earn;

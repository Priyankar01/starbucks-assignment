import React from 'react';
import './header.css';

function header() {
	return (
		<>
			<section id="sticky-header" className="sticky">
				<div className="header-wrapper">
					<div className="header-txt">STARBUCKS REWARDS</div>
					<div>
						<button className="header-btn">Join in the app</button>
					</div>
				</div>
			</section>
		</>
	);
}

export default header;

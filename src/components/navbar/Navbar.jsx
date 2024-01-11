import React, { useState } from 'react';
import Logo from '../../assets/starbucks-logo.png';
import './navbar.css';
import RoomIcon from '@mui/icons-material/Room';

function Navbar() {
	const [selectedMenuItem, setSelectedMenuItem] = useState('Rewards');

	const handleMenuItemClick = (menu) => {
		setSelectedMenuItem(menu);
	};
	return (
		<>
			<section id="navbar">
				<div className="navbar-wrapper">
					<div className="navbar-left-section">
						<img className="navbar-logo" src={Logo} alt="Logo" />
						<div
							className={`menu-item ${
								selectedMenuItem === 'Menu' ? 'active' : ''
							}`}
							onClick={() => handleMenuItemClick('Menu')}>
							Menu
						</div>
						<div
							className={`menu-item ${
								selectedMenuItem === 'Rewards' ? 'active' : ''
							}`}
							onClick={() => handleMenuItemClick('Rewards')}>
							Rewards
						</div>
						<div
							className={`menu-item ${
								selectedMenuItem === 'Gift Cards' ? 'active' : ''
							}`}
							onClick={() => handleMenuItemClick('Gift Cards')}>
							Gift Cards
						</div>
					</div>
					<div className="navbar-right-section">
						<div className="location">
							<RoomIcon />
							Find a store
						</div>
						<div className="navbar-sign">
							<ul>
								<li>
									<button className="sign-in-btn">Sign in</button>
								</li>
								<li>
									<button className="join-now-btn">Join Now</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Navbar;

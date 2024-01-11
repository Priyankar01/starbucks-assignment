import React, { useState } from 'react';
import './favorites.css';

function Favorites() {
	const rewardItems = [
		{
			label: '50⭐',
			title: 'Customize your drink',
			text: 'Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.',
			imageUrl:
				'https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png',
		},
		{
			label: '100⭐',
			title:
				'Brewed hot or iced coffee or tea, bakery item, packaged snack and more',
			text: 'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.',
			imageUrl:
				'https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png',
		},
		{
			label: '200⭐',
			title: 'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast',
			text: 'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.',
			imageUrl:
				'https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png',
		},
		{
			label: '300⭐',
			title: 'Sandwich, protein box or at-home coffee',
			text: 'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant.',
			imageUrl:
				'https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png',
		},
		{
			label: '400⭐',
			title: 'Select Starbucks merchandise',
			text: 'Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.',
			imageUrl:
				'https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png',
		},
	];

	const [selectedItem, setSelectedItem] = useState(rewardItems[0]);

	const handleItemClick = (item) => {
		console.log('Selected Item:', item);
		setSelectedItem(item);
	};

	return (
		<>
			<section id="favorites">
				<div className="favorites-wrapper">
					<h1>Get your favorites for free</h1>
					<ul className="favorites-list">
						{rewardItems.map((item) => (
							<li
								key={item.label} // Assuming 'label' is unique
								onClick={() => handleItemClick(item)}
								className={selectedItem.label === item.label ? 'selected' : ''}>
								{item.label}
							</li>
						))}
					</ul>
				</div>
				<div className="favorite-info-section">
					{selectedItem ? (
						<>
							<img src={selectedItem.imageUrl} alt="" />
							<div>
								<h1>{selectedItem.title}</h1>
								<p>{selectedItem.text}</p>
							</div>
						</>
					) : (
						<p>Please select an item</p>
					)}
				</div>
			</section>
		</>
	);
}

export default Favorites;

import React from 'react';
import Header from './components/sticky-header/header';
import Navbar from './components/navbar/Navbar';
import Landing from './components/landing/Landing';
import Started from './components/started/Started';
import Favorites from './components/favorites/Favorites';
import Extras from './components/extras/Extras';
import Earn from './components/earn/Earn';

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<Landing />
			<Started />
			<Favorites />
			<Extras />
			<Earn />
		</>
	);
}

export default App;

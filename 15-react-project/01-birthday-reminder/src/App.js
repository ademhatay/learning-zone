import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
	const [people, setPeople] = useState(data);
	const [control, setControl] = useState(false);

	const toggle = () => {
		console.log(control);
		setControl(!control);
		if (!control) {
			setPeople(data);
		} else {
			setPeople([]);
		}
	}

	return (
		<main>
			<section className='container'>
				<h3>{people.length} Birthday Today</h3>
				<List people={people} />
				<button onClick={() => toggle()}>
					{!control ? "Show All": "Clear All"}
				</button>
			</section>
		</main>
	);
}

export default App;

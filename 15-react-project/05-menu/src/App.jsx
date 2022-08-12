import React from 'react'
import { useState } from 'react'
import Categories from './Categories';
import items from './data'
import Menu from './Menu';

const App = () => {
	const allCategories = ["all", ...new Set(items.map((item) => item.category))];

	const [menuItem, setMenuItem] = useState(items);
	const [categories, setCategories] = useState(allCategories);

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItem(items);
			return ;
		}
		const newItems = items.filter((item) => item.category === category);
		setMenuItem(newItems);
	}
	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>our menu</h2>
					<div className="underline"></div>
				</div>
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItem} />
			</section>
		</main>
	)
}

export default App
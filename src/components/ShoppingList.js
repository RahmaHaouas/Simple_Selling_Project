import { useState } from 'react'
import { acc } from '../datas/accessoire'
import AccItem from './AccItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = acc.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

	function addToCart(name, price) {
		const currentAccAdded = cart.find((acc) => acc.name === name)
		if (currentAccAdded) {
			const cartFilteredCurrentAcc = cart.filter(
				(acc) => acc.name !== name
			)
			updateCart([
				...cartFilteredCurrentAcc,
				{ name, price, amount: currentAccAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-acc-list'>
				{acc.map(({ id, cover, name, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<AccItem
								cover={cover}
								name={name}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
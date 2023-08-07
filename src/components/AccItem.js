import '../styles/AccItem.css'

function handleClick(accName) {
	alert(`Vous voulez acheter 1 ${accName}? Très bon choix `)
}

function AccItem({ cover, name, price }) {
	return (
		<li className='lmj-acc-item' onClick={() => handleClick(name)}>
			<span className='lmj-acc-item-price'>{price}€</span>
			<img className='lmj-acc-item-cover' src={cover} alt={`${name} cover`} />
			{name}
		</li>
	)
}

export default AccItem
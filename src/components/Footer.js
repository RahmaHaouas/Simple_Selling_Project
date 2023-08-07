import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleButtonClick = () => {
    setShowSuccessMessage(true);
  };
	const [inputValue, setInputValue, ] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}


	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>Laissez-nous votre Feedback :</div>
			<input
				placeholder='Ecrire...'
				onChange={handleInput}
				value={inputValue}
			/>
			 <div className="App">
      {showSuccessMessage && <p>Envoi réussite !</p>}
      <button onClick={handleButtonClick}>Envoyer</button>
    </div>
		</footer>
	)
}

export default Footer
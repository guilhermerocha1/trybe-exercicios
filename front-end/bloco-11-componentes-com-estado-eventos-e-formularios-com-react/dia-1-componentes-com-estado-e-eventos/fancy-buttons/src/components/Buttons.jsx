import React from 'react';

function handleClick1() {
	console.log('Cliquei 1');
}

function handleClick2() {
	console.log('Cliquei 2');
}

function handleClick3() {
	console.log('Cliquei 3');
}

class Buttons extends React.Component {
	render() {
		return (
			<>
				<button onClick={handleClick1}>Meu botão 1</button>
				<button onClick={handleClick2}>Meu botão 2</button>
				<button onClick={handleClick3}>Meu botão 3</button>
			</>
		)
	}
}

export default Buttons;
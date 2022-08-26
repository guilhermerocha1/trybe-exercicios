const express = require('express');

const app = express();

app.get('/hello', handleHelloWordRequest);

app.listen(3001, () => {
	console.log('Aplicação ouvida na porta 3001');
})

function handleHelloWordRequest() {
	res.status(200).send('Hello Word');
}

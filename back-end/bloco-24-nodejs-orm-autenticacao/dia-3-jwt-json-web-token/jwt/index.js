const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const secret = 'minhasenhasupersecreta';

const app = express();

app.use(bodyParser.json());


app.get('/', (_req, res) => {
	res.status(200).json({ id: 1, user: 'guilherme' });
});

app.post('/login', (req, res) => {
	if (req.body.user === 'guilherme' && req.body.pass === '123'){
		const token = jwt.sign({ userId: 1 }, secret, { expiresIn: 300 });
		return res.json({ auth: true, token });
	}
	res.json({ message: 'Token invalid' });
})

app.listen(3000, () => console.log('Escutando na porta 3000'));

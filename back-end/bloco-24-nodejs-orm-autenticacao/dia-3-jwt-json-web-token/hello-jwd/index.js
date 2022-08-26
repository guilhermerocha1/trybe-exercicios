const express = require('express');
const bodyParser = require('body-parser');
const { validateUser, validationToken } = require('./middlewares/validationUser');
const jwt = require('./token');

const app = express();
app.use(bodyParser.json());

const payload = {
	admin: false,
	username: 'admin',
	password: 's3nh4S3gur4???',
};

app.post('/login', validateUser, (req, res) => {
	const { username, password } = req.body;
	const token = jwt(username);
	if (username === payload.username || password === payload.password){
		return res.json({ admin: true, token });
	}
	res.json({ token });
});

app.get('/user/me', validationToken, (req, res) => {
	const { user } = req.body;
	console.log(req.body)
	res.json({ message: `Bem vindo ${user}` })
});

app.listen(3000, console.log('Escutando na porta 3000'));

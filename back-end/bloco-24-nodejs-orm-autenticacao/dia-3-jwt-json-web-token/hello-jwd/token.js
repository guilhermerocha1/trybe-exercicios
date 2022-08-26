const jwt = require('jsonwebtoken');

const secret = 'minhasenhadificil';

const token = (username) => {
	const token = jwt.sign({ user: username }, secret, { expiresIn: 100000 });
	return token;
};

module.exports = token;

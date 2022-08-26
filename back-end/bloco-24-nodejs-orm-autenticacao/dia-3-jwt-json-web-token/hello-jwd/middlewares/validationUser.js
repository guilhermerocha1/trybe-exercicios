const jwt = require('jsonwebtoken');

const secret = 'minhasenhadificil';

const validateUser = (req, res, next) => {
	const { username, password } = req.body;
	if (username.length < 5 || password.length < 5){
		return res.json({ message: 'User or password invalid' });
	}
	next();
}

const validationToken = (req, res, next) => {
	const token = req.headers['authorization'];
	if (!token) return res.json({ message: 'Token invalid' });
	const decod = jwt.verify(token, secret);
	//if (decod) return res.json({ message: 'Token valid' })
	console.log(decod);
	return res.json(decod);	
	next();
}

module.exports = { validateUser, validationToken };

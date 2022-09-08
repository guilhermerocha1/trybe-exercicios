const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Books = require('./models/Books');

app.use(express.json());

app.get('/book', async (req, res) => {
	console.log(Books);
})

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

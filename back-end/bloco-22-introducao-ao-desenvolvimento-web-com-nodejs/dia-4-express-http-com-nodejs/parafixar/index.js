const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];
// Para fazer uma requisição simples
app.get('/drinks', (req, res) => {
	res.json(drinks);
});
// Para tratar com id especifico
app.get('/drinks/:id', (req, res) => {
	const { id } = req.params;
	const findDrinks = drinks.find((r) => r.id === Number(id));

	if(!findDrinks) return res.status(404).json({ Response: 'drinck not exist' });

	return res.status(200).json(findDrinks);
});
// Para adicionar uma nova informação
app.post('/drinks/add', (req, res) => {
	const { id, name, price } = req.body;
	drinks.push({ id, name, price });
	res.status(200).json({ message: 'Drink created successfully!' });
})
// Para atualizar a informação
app.put('/drinks/:id', (req, res) => {
	const { id } = req.params;
	const { name, price } = req.body;
	const findDrinks = drinks.find((r) => r.id === Number(id));
	if (findDrinks === -1) return res.status(404).json({ message: "Drink not found" });

	drinks[findDrinks] = { ...drinks[findDrinks], name, price };
	res.status(204).end();
})

app.listen(3001, () => {
	console.log('amigo estou aqui')
})

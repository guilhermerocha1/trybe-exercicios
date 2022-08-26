const express = require('express');
const booksRoute = require('./routes/booksRoute');
const bodyParse = require('body-parser');
const validationUser = require('./middlewares/validationUser');
const { create, getAll, getById, isValid } = require('./models/User');

const app = express();
app.use(bodyParse.json());

app.post('/user', validationUser, async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const user = await create({ first_name, last_name, email, password });
  res.status(201).json(user);
});

app.get('/user', async (_req, res) => {
  const result = await getAll();
  res.status(200).json(result);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const result = await getById(id);
  res.status(200).json(result);
});

app.use(booksRoute);

app.listen(3001, () => {
  console.log(`Ouvindo na porta 3001`);
})
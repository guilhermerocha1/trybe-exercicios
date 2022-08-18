const express = require('express');
const Books = require('../models/Books');
const bodyParser = require('body-parser');

const booksRoute = express.Router();

booksRoute.use(bodyParser.json());

booksRoute.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Books.getByAuthorId(id);

  if (!books) return res.status(404).json({ message: 'Not found' });
  res.status(200).json(books);
});

booksRoute.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if(!Books.isValid(title, author_id)) {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  await Books.createAuthor(title, author_id);
  res.status(201).json({ message: "Livro criado com sucesso" });
})

module.exports = booksRoute;
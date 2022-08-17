const express = require('express');
const Books = require('./models/Books');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Books.getByAuthorId(id);

  if (!books) return res.status(404).json({ message: 'Not found' });
  res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if(!Books.isValid(title, author_id)) {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  await Books.createAuthor(title, author_id);
  res.status(201).json({ message: "Livro criado com sucesso" });
})

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`)
})
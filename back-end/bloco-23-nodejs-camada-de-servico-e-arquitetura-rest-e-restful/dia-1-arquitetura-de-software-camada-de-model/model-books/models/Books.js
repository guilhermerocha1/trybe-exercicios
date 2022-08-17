const connection = require("./connection");

const ReNameCamelCase = (author) => ({
  id: author.author_id,
  title: author.title,
});

const getByAuthorId = async (id) => {
  const query = 'SELECT author_id, title FROM model_example.books WHERE author_id = ?;'
  const [author] = await connection.execute(query, [id]);

  if (author.length === 0) return null;

  return author.map(ReNameCamelCase);
};

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT title FROM model_example.books;'
  )
  return books;
}

const isValid = (title, id) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!id || typeof id !== 'number') return false;

  return true;
}

const createAuthor = async (title, id) => {
  connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)'
  , [title, id]);
}

module.exports = { getAll, getByAuthorId, isValid, createAuthor };
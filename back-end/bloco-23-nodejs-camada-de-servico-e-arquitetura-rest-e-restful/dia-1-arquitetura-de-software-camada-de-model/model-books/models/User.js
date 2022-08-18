const connection = require('./connection');

const create = async ({ first_name, last_name, email, password }) => {
  const [user] = await connection.execute(
    'INSERT INTO model_example.user (first_name, last_name, email, password) VALUES(?,?,?,?);',
    [first_name, last_name, email, password]
  );
  const result = {
    id: user.insertId,
    first_name,
    last_name,
    email,
  };
  return result;
}

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  lastName: authorData.last_name,
  email: authorData.email,
});

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT id, first_name, last_name, email FROM model_example.user;'
  );
  return result.map(serialize);
}

const isValid = (id) => {
  if (!Number(id)) return true;
}

const getById = async (id) => {
  const [result] = await connection.execute(
    'SELECT id, first_name, last_name, email FROM model_example.user WHERE id = ?;', [id]
  );
  return result.map(serialize);
}

module.exports = { create, getAll, getById, isValid };
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updateAt: DataTypes.DATE,
  });
  return Books;
};

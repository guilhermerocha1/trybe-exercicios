const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
function formatedBookNames(arr) {
  // escreva seu código aqui
  // retorne Nome do livro, genêro, pessoa autora
  return arr.map((element) => {
    return `${element.name} - ${element.genre} - ${element.author.name}`
  });
}

function nameAndAge(arr) {
  // escreva seu código aqui
  // retornar um objeto com autor e ordenado idade da pessoa quando o livro foi lancado
  return arr.map((callback) => (
    {
      age: callback.releaseYear - callback.author.birthYear,
      author: callback.author.name,
    }
  )).sort((a, b) => a.age - b.age);
}

function fantasyOrScienceFiction() {
  // escreva seu código aqui
  // filtrar objetos com genero fantasia é ficção Cientifica
  return books.filter((callback) => callback.genre === 'Ficção Científica' || callback.genre === 'Fantasia');
}

function oldBooksOrdered() {
  // escreva seu código aqui
  // filtrar os livros com mais de 60 anos de publicação e ordenar em ordem decrecente
  return books.filter((callback) => (
    2021 - callback.releaseYear > 60
  ))
  .sort((a, b) => a.releaseYear - b.releaseYear);
}

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  // Filtrar nome dos autores com genero fantasia e ficção cientifica
  return books.filter((author) => (
    author.genre === 'Fantasia' || author.genre === 'Ficção Científica'
  )).map((nameAuthor) => nameAuthor.author.name).sort();
}

console.log(fantasyOrScienceFictionAuthors());

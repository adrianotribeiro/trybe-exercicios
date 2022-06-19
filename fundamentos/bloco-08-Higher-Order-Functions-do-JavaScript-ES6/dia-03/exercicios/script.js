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

// Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

const formatedBookNames = (books) => {
  const nomeDoLivro = books.map((book) => book.name);
  const generoDoLivro = books.map((book) => book.genre);
  const nomeDaPessoaAutora = books.map((book) => book.author.name);

  const catalogue = nomeDoLivro.map((livro, index) => {
    return `${livro} - ${generoDoLivro[index]} - ${nomeDaPessoaAutora[index]}`;
  });

  return catalogue;
};

console.log(formatedBookNames(books));

//Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author,
//com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado.
//O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando
//o livro foi lançado.

const resultadoEsperado = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

const nameAndAge = (books) => {
  const catalogue = books
    .map((book) => ({
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name,
    }))
    .sort((a, b) => a.age - b.age);
  return catalogue;
};

console.log(nameAndAge(books));

const Resultexpected = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
];

//Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const fantasyOrScienceFiction = (books, genre) => {
  const cienceFiction = books.filter((book) => book.genre === genre);

  return cienceFiction;
};

console.log('');
console.log(fantasyOrScienceFiction(books, 'Ficção Científica'));

//
const esperadoResultado = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

//Crie um array ordenado pelos livros com mais de
//60 anos de publicação e ordene-o pelo livro mais velho.

const oldBooksOrdered = (books) => {
  const currentYear = new Date().getFullYear();
  const ordenedBooks = books
    .filter((book) => currentYear - book.releaseYear > 60)
    .sort((a, b) => a.releaseYear - b.releaseYear);

  return ordenedBooks;
};
console.log('Mais velho até o mais novo');
console.log(oldBooksOrdered(books));

//Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const fantasyOrScienceFictionAuthors = (books, genre) => {
  const genreAuthors = [];
  genreAuthors.push(
    books
      .filter((book) => book.genre === genre)
      .map((book) => [book.author.name])
      .sort()
  );
  return genreAuthors;
};

console.log(`Autores de fantasia:
${fantasyOrScienceFictionAuthors(books, 'Fantasia')}`);

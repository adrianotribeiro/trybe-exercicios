//Dada uma matriz, transforme em um array.

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

const flatten = (arrays) => arrays.reduce((acc, curr) => acc.concat(curr), []);
//retorna um único array
//reduce recebe e compara cada elemento da array
//E com o concat ele concatena cada valor interando a um elemento da array
console.log(flatten(arrays));

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
//Crie uma string com os nomes de todas as pessoas autoras.
const reduceName = (books) => {
  const authorNames = books.reduce((acc, book, index, array) => {
    if (index === array.length - 1) return `${acc} ${book.author.name}.`;
    return `${acc} ${book.author.name},`;
  }, '');

  return authorNames.trim();
};

console.log(reduceName(books));

//🚀 3- Calcule a média de idade que as pessoas autoras tinham quando
//seus respectivos livros foram lançados.

const averageAge = (books) => {
  const average = books.reduce((acc, curr) => {
    const currAuthorAge = curr.releaseYear - curr.author.birthYear;
    return acc + currAuthorAge;
  }, 0);
  return average / books.length;
};

console.log(averageAge(books));

//Encontre o livro com o maior nome.

const longestNamedBook = (books) => {
  const longestName = books.reduce((acc, curr) => {
    if (curr.name.length > acc.name.length) {
      return curr;
    }
    return acc;
  });
  return longestName;
};
console.log(longestNamedBook(books));

//Dada o array de nomes, retorne a quantidade de vezes
//em que aparecem a letra a maiúscula ou minúscula.

const nomes = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

const containsA = (names) => {
  let count = 0;
  const contains = names.reduce((accWord, currWord) => {
    return `${accWord} ${currWord}`;
  });

  for (let i = 0; i < contains.length; i += 1) {
    if (contains[i] === 'A' || contains[i] === 'a') {
      count += 1;
    }
  }
  contains.split();
  return `A quantidade será: ${count}`;
};

console.log(containsA(nomes));

// 6.**- Agora vamos criar um novo array de objetos a partir das informações abaixo,
// onde cada objeto terá o formato { name: nome do aluno, average: media das notas }.
// Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos,
// aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o
// index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const studentAverage = (estudantes, notas) => {
  const mediaNotas = estudantes.map((estudante, i) => ({
    name: estudante,
    average: notas[i].reduce((acc, curr) => acc + curr) / notas[i].length,
  }));

  return mediaNotas;
};

console.log(studentAverage(students, grades));

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

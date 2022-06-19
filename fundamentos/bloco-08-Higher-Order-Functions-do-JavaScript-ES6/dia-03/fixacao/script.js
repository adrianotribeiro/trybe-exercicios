const numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyEven = (number) => number % 2 === 0;
//Determina se o valor passado é divisível por 2
const isEven = numbers.filter(verifyEven);
//o filter filtra todos os valores divisiveis por 2
//ignorando os que não são, e colhendo o que são
console.log(isEven);
//Outra forma de ser realizado:
const isEven2 = numbers.filter((number) => number % 2 === 0);
console.log(isEven2);

const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) =>
  arrayOfPeople.filter((people) => people.age < 18);
//Recebe como parâmetro o objeto
//percorre a array de objetos e filtra retornando todas as pessoas que forem menores de idade
console.log(verifyAgeDrive(objPeople));

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (nome, listStudents) =>
  listStudents.filter((student) => student !== nome);
//Recebe uma nome e uma array de nomes
//Com o filter ele percorre e por causa da condição ele retorna todos os elementos
//que não são compativéis com Ricardo, 'excluindo' o nome passado como parâmetro

const newListSdutents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListSdutents);

//map

const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames);

//usando o map
const nomeCompleto = persons.map(
  (person) => `${person.firstName} ${person.lastName}`
);
console.log('');
console.log(persons);
nomeCompleto.forEach((nome) => {
  console.log(nome);
});

const numeros = [1, 2, 3, 4, 4, -5];

const valoresNegativos = numeros.map((number) =>
  number > 0 ? number * -1 : number
);

console.log(valoresNegativos);
console.log(numeros);

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => {
  //Passa as duas arrays como parâmetros
  const produtosComPreços = listProducts.map((products, index) => ({
    //Acessa a lista de produtos com o map e passa dois parâmetros - 1 os produtos e o segundo o index de cada produto
    [products]: listPrices[index],
    //retorna como objeto: chave/valor NomeDoProduto:ListaDosPreços[index],
    //map irá percorrer a lista de produtos, criará um array de objetos que cada chave possuirá o nome de um
    //produto da lista e cada valor será atribuido com base na posição de cada elemento da lista de preços
  }));
  return produtosComPreços;
};

console.log(updateProducts(products, prices));

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

// const allNameStudents = (students) => {
//   return students
//     .filter((student) => student.turno === 'Manhã')
//     .map((student) => `${student.nome} ${student.sobrenome}`);
// };
// console.log(allNameStudents(estudantes));

const studentStatus = (estudantes, nome) => {
  const estudanteProcurado = estudantes.find(
    (estudante) => estudante.nome === nome
  );
  const materialStatus = estudanteProcurado.materias.map(
    (materia) =>
      `${materia.name}: ${materia.nota >= 60 ? 'aprovado' : 'reprovado'}`
  );
  return `${nome}: ${materialStatus}`;
};
console.log('');
console.log(studentStatus(estudantes, 'Natalia'));

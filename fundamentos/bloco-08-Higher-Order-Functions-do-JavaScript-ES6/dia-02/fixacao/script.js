//Faça um código que realiza a tabuada do do 2

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};
numbers.forEach(multipliesFor2);
//Para cada elemento da array, ela multiplicou por 2 apenas passando a função como parâmetro

//Função que converte todos os elementos de uma array em letras maiusculas

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names);

//sobre array.find

const numeros = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (numero) => numero % 2 === 0;
//recebe a função que faz o módulo de do parâmetro por 2 e verifica se o resultado é
//igual a zero
const isEven = numeros.find(verifyEven);
//Determina o retorno do primeiro elemento encontrando que for par
console.log(isEven);

console.log(verifyEven(9));
console.log(verifyEven(14));

//outra forma
const isEven2 = ns.find((n) => {
  n % 2 === 0;
});

console.log(isEven2);

//Verifica se um estudante passou nas matérias

const grades = {
  portugues: 'Aprovado',
  matematica: 'Aprovado',
  ingles: 'Aprovado',
};

const verifyGrades = () =>
  Object.values(studentsGrades).every((grade) => grade === 'Aprovada');

console.log(verifyGrades(grades));

// Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido
// e caso contrário, retorne false, use some;

const chamada = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, nome) => arr.some((name) => name === nome);
console.log(hasName(chamada, 'Ana'));

//Escreva uma função que dado um array de pessoas e uma idade mínima retorne
//true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) =>
  arr.every((idadeMinima) => idadeMinima.age >= minimumAge);
console.log(verifyAges(people, 18));

//Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.
//Pesquisar para ver se consigo fazer em formato de função
const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
people2.sort((a, b) => {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(people2);

//Modifique o sort do exercício anterior para que ordene o array
//pela idade das pessoas em ordem decrescente.

people2.sort((a, b) => {
  if (a.age < b.age) {
    return 1;
  } else if (a.age > b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(people2);

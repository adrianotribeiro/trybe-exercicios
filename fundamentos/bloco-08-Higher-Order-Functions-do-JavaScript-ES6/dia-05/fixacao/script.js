// const valores = [1, 2, 3];

// const array = [...valores, 4, 5, 6];

// console.log(valores);
// console.log(array);

// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months); /* [
//   'JAN', 'FEV', 'MAR',
//   'ABR', 'MAI', 'JUN',
//   'JUL', 'AGO', 'SET',
//   'OUT', 'NOV', 'DEZ'
// ] */

// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo));

// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers));
// console.log(Math.min(...randomNumbers));

// const people = {
//   id: 101,
//   name: 'Alysson',
//   age: 25,
// };

// const about = {
//   address: 'Av. Getúlio Vargas, 1000',
//   occupation: 'Developer',
// };

// const customer = { ...people, ...about };
// console.log(customer);

// const specialFruits = ['Maçã', 'Banana', 'Laranja', 'Melância'];

// const additionalItens = ['Melão', 'Mamão', 'Uva', 'Guaraná'];

// const fruitSalada = (itens, itensAdicionais) => [...itens, ...itensAdicionais];

// console.log(fruitSalada(specialFruits, additionalItens));

// const product = {
//   name: 'Smart TV',
//   price: 'R$ 2000',
//   seller: 'Casa de Minas',
// };

// const { nome, seller } = product;
// //Cria uma variável com o nome da chave para associar ela a chave e por consequência o valor
// //da chave do objeto
// console.log(nome);
// console.log(seller);

// const printProductDetails = ({ name, price, seller }) => {
//   console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
// };
// printProductDetails(product);

// // definindo o objeto
// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// const {
//   name,
//   age,
//   homeWorld: { name: planetName },
//   description: { jedi },
// } = character;

// console.log(
//   `Esse é o ${name}, que possui ${age} anos, mora no planeta ${planetName}, e por incrível que pareça, ele ${
//     jedi ? 'é um jedi' : 'não é um jedi'
//   }`
// );

// const daysOfWeek = {
//   workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//   weekend: ['Saturday', 'Sunday'],
// };

// const { workDays, weekend } = daysOfWeek;

// console.log(workDays);
// console.log(weekend);

// const weekDays = [...workDays, ...weekend];

// console.log(weekDays);

// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };

// const { a: name2, b: turma, c: materia } = student;

// console.log(name2);
// console.log(turma);
// console.log(materia);

//Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro
// com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise.
// Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.
// Para isso, utilize o spread operator.

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userInfo = { ...user, ...jobInfos };
console.log(userInfo);

//2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado
// anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and
// my squad is RLL-Rocket Landing Logic"
const { name, age, nationality, profession, squadInitials, squad } = userInfo;
console.log(
  `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`
);

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const [firstCountry, secondCountry, thirdCountry, fourthCountry] =
  arrayCountries;
console.log('');
console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
console.log(fourthCountry);

//Produza o mesmo resultado do código, porém utilizando o array destructuring para
//recolher a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
saudacoes[1](saudacoes[0]);

const [saudacao] = saudacoes;
console.log(saudacao);

//A seguir, temos alguns valores que estão descritos em variáveis incoerentes.
// Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis
// correspondentes ao seu verdadeiro tipo

// array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir.
// Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

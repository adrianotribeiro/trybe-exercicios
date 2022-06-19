//Use o método forEach chamando a callback showEmailList para apresentar os emails

// const emailListData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
// };

// emailListData.forEach(showEmailList);

//Array contendo uma lista de emails

const div = document.getElementById('email-list');
const submitButton = document.getElementById('btn-filter');
const emailList = [
  'isa@myemail.com',
  'lipe@myemail.com',
  'digo@myemail.com',
  'greg@myemail.com',
];

//Função callback que recebe o array emailList como parâmetro

const showEmailList = (list) => {
  div.innerHTML = '';
  //Para cada elemento da lista (email), função cria uma tag p com a frase `${email}: Enviado com
  //sucesso
  list.forEach((email) => {
    const p = document.createElement('p');
    p.innerHTML = `${email} : Enviado com sucesso!`;
    div.appendChild(p);
  });
  //Para cada elemento da lista será criado um element p com o conteúdo gerado
};

submitButton.addEventListener('click', () => showEmailList(emailList));
//Quando o botão for clicado a lista será passada como parâmetro e a função
//será executada

//Sobre .find

// -> Retorne o primeiro número do array que é divisível por 3 e 5, caso ele exista
const numbers = [19, 21, 30, 3, 45, 22, 15];

//função predicato - retorna verdadeiro ou falso
const findDivisibleBy3And5 = (number) => {
  const isDivisible3 = number % 3 === 0;
  const isDivisible5 = number % 5 === 0;

  return isDivisible3 && isDivisible5;
};

const firstNumberDivisible = numbers.find(findDivisibleBy3And5);

if (firstNumberDivisible) {
  console.log(firstNumberDivisible);
} else {
  console.log('Nenhum valor divisível por 3 e 5 foi encontado');
}
//Tema - Generalize essa função - usuário passa os valores que testarão se a array será divisivel por esses valores
//Utilize o find para encontrar o primeiro nome com cinco letras, caso ela exista;
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5;

const firstNameWithFiveLetters = names.find(findNameWithFiveLetters);

if (firstNameWithFiveLetters) {
  console.log(firstNameWithFiveLetters);
} else {
  console.log(`Não há nenhuma palavra que possua cinco letras`);
}

// Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];
const searchMusicId = '31031685';
const findMusic = (id) => id.id === searchMusicId;

const foundId = musicas.find(findMusic);
if (foundId) {
  console.log(`Encontrada a música ${foundId.title} com o ID: ${foundId.id}`);
} else {
  console.log(`A música não foi encontrada nos registros`);
}

//

const answer = document.getElementById('answer');
const buttonSome = document.getElementById('btn-some');
const nums = [2, 4, 6, 8, 12, 14, 16, 17];

const isOdd = (number) => number % 2 !== 0;

const checkIsOdd = (array) => {
  if (array.some(isOdd)) {
    answer.innerHTML = 'Pelo menos um valor numérico é ímpar';
  } else {
    answer.innerHTML = 'Nenhum valor numérico é ímpar';
  }
};

buttonSome.addEventListener('click', () => {
  checkIsOdd(nums);
});

//
const ns = [1, 3, 5, 7, 9, 10];
const answer2 = document.getElementById('answer2');
const buttonEvery = document.getElementById('btn-every');
const isOdd2 = (number) => number % 2 !== number;

const checkIsOdd2 = (array) => {
  if (array.every(isOdd2)) {
    answer2.innerHTML = `Todos os números são ímpares`;
  } else {
    answer2.innerHTML = `Pelo menos um número é par`;
  }
};

buttonEvery.addEventListener('click', () => checkIsOdd2(ns));

const pushNumber = (list, number) => list.push(number);
let numbers = [];
pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);
console.log(numbers);

let numbers2 = [];
setTimeout(() => pushNumber(numbers2, 1), 3000);

pushNumber(numbers2, 2);
pushNumber(numbers2, 3);

console.log(' ');
console.log(numbers2);

//callback

const despesas = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const renda = 1000;

//                 1Parâmetro / 2parâmetro / Callback
const despesasMensal = (renda, despesas, somaDasDespesas) => {
  const despesaTotal = somaDasDespesas(despesas);
  //Recebe o valor da soma de todas as despesas
  const saldoFinal = renda - despesaTotal;
  //Recebe o valor final do que irá sobrar de renda no final do mês

  console.log(`O Balanço do mês
  Recebido: R$ ${renda},00
  Gasto: R$ ${despesaTotal},00
  Saldo: R$ ${saldoFinal},00 `);
};

const somaDasDespesas = (despesas) => {
  const customItem = despesas.map((item) => Object.values(item));
  //Recebe uma arrau de todos os valores de cada objeto
  const despesaTotal = customItem.reduce((acc, curr) => acc + curr[0], 0);
  //Recebe a soma de todos os elementos da array
  return despesaTotal;
};
console.log(' ');
despesasMensal(renda, despesas, somaDasDespesas);
console.log(' ');

//mais para fixar

const userFullName = ({ firstName, lastName }) =>
  `Hello! My name is ${firstName} ${lastName}`;
//função que recebe duas keys, object destruturing, e retorna uma frase com os valores dessas chaves
const userNationality = ({ firstName, nationality }) =>
  `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) =>
  Math.floor(Math.random() * maxMilliseconds);
//Função irá receber userFullName como parâmetro
//E irá retornar esse parâmetro passando como parâmetro um objeto
const getUser = (param) => {
  setTimeout(() => {
    const user = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Russian',
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    return param(user);
  }, delay());
};

console.log(getUser(userFullName));
console.log(getUser(userNationality));
console.log('');

const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) =>
  console.log(`${name}'s currency is the ${currency}`);
//Funções que recebem de maneira destruturada chaves de objetos

const delay2 = (maxMilliseconds = 5000) =>
  Math.floor(Math.random * maxMilliseconds);

const printError = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSucess, onFailed) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if (didOperationSucceed) {
      const country = {
        name: 'Brazil',
        hdi: 0.759,
        currency: 'Real',
      };
      onSucess(country);
    } else {
      const errorMessage = 'Country could not be found';
      onFailed(errorMessage);
    }
  }, delay2());
};

getCountry(countryName, printError);
getCountry(countryCurrency, printError);

//Fixação Testes assíncronos

const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

module.exports = { asyncSum };

const sum = (number1, number2) => {
  return number1 + number2;
}
const sumVariable = sum;
console.log(sumVariable);

//

const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (callback) => {
  console.log(callback());
}

printGreeting(sayHello);


const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15);
console.log(initialSum(5));

//High Order Function

const button = document.querySelector('#signup-button');
//Acessamos o elemento que contém o id determinado
const registerUser = () => {
  console.log('Registrado com sucesso');
}
//Função que executa o registro de um usuário
button.addEventListener('Click', registerUser);
//E determinamos que quando o botão for clicado ele executa a função

//addEventListener é uma HOF ele usa como segundo parâmetro uma função

//Estruturando uma HOF

//função que recebe dois valores
//number = limite de até onde o contador irá
//action = função que quando passada exibirlá no console cada valor de count
const repeat = (number, action) => {
  for(let count = 0; count <= number; count += 1) {
    action(count);
  }
}

repeat(5, console.log);

//função que recebe dos parâmetros
//number = valor de que ser irá repetir a função
//action = função que executa uma ação
const secondRepeat = (number, action) => {
  for(let count = 0; count <= number; count += 1) {
    action(count);
  }
};
//Declarando a função passamos dois parâmetros
//valor que se irá reptir a função acima
//função que recebe um parâmetro onde testa cada valor de count...
//E irá exibir somente valores pares
secondRepeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});


const thirRepeat = (number, action) => {
  for(let count = 0; count <= number; count++){
    action(count);
  }
};

const isEven = (number) => {
  if(number % 2 === 0 ) {
    console.log(number, 'is even');
  }
};


const isOdd = (number) => {
  if(number % 2 !== 0) {
    console.log(number, 'is odd');
  }
};

thirRepeat(3, isEven);
thirRepeat(3, isOdd);

const numberGenerator = () => {
  return Math.random() * 100;
}

console.log(numberGenerator());

const wakeUpMessage = () => {
  return `Acordando!`
}
const breakFestMessage = () => {
  return `Bora tomar café!`
}
const goSleepMessage = () => {
  return `Partiu dormir`
}
const doingThings = (callback) => {
  const result = callback();
  console.log(result);
}

doingThings(wakeUpMessage);
doingThings(breakFestMessage);
doingThings(goSleepMessage);
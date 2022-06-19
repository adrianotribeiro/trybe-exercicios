//1 - Dado o código abaixo, qual a ordem de finalização
//de execução das linhas comentadas?

// const planetDistanceFromSun = ({
//   name,
//   distanceFromSun: { value, measurementUnit },
// }) => `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: 'mars',
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: 'Kilometers',
//   },
// };

// const venus = {
//   name: 'Venus',
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: 'kilometers',
//   },
// };

// const jupiter = {
//   name: 'Jupiter',
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: 'kilometers',
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C

//2 - Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

// const planetDistanceFromSun = ({
//   name,
//   distanceFromSun: { value, measurementUnit },
// }) => `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: 'Mars',
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: 'kilometers',
//   },
// };

// const venus = {
//   name: 'Venus',
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: 'kilometers',
//   },
// };

// const jupiter = {
//   name: 'Jupiter',
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: 'kilometers',
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

// A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet,
// de forma que Marte seja impresso assincronamente, depois de 4 segundos.
const mars = {
  name: 'Mars',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: 'kilometers',
  },
};

const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: 'kilometers',
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: 'kilometers',
  },
};

// const getPlanet = () => {
//   const mars = {
//     name: 'Mars',
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: 'kilometers',
//     },
//   };

//   setTimeout(() => {
//     console.log('Returned planet: ', mars);
//   }, 4000);
// };

// getPlanet();

// const messaDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9) / 5 + 32;

// const temperatureFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}F at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}C at Mars`);

// const messageSendingSuccessRate = () => Math.random() <= 0.5;

// const handlerError = (errorReason) =>
//   console.log(`Error getting temperature ${errorReason}`);

// const sendMarsTemperature = (message, errorMessage) => {
//   setTimeout(() => {
//     if (messageSendingSuccessRate()) {
//       message(getMarsTemperature());
//     } else {
//       errorMessage('out of range');
//     }
//   }, messaDelay());
// };

// sendMarsTemperature(temperatureFahrenheit, handlerError);
// sendMarsTemperature(greet, handlerError);

const upperCase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

module.exports = upperCase;

const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];
const getPokemonDetails = (filter, callback) => {
  const pokemon = pokemons.find(filter);

  setTimeout(() => {
    if (pokemon === undefined) {
      return callback(new Error('Não temos esse Pokémon para você :('), null);
    }
    const { name, type, ability } = pokemon;
    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
};
const searchTerm = (term, wordFilter) => (infoPokemon) =>
  infoPokemon[term] === wordFilter;

const errorMessage = (error, message) => {
  if (error === null) {
    console.log(message);
  }
  console.log(error);
};

getPokemonDetails(searchTerm('ability', 'chakaka'), errorMessage);

module.exports = {
  getPokemonDetails,
  searchTerm,
  errorMessage,
  pokemons,
};

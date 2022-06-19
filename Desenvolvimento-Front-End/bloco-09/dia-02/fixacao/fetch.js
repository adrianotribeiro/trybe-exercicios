const fetch = require('node-fetch');
const url = 'https://api.chucknorris.io/jokes/random?category=dev';

const fetchJoke = (urlJoke) =>
  fetch(urlJoke)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado =( \n${error}`));
//Parada poder usar a API ela precisa primeiramente ser tratada
//primeiro convertida para json e para depois podermos acessar os seus dados
//E caso dê algo de errado com a resquisição nós podemos usar dentro da nossa 'cadeia' o catch que captura
//esse erro e exibe na tela
fetchJoke(url);

//Asyn e Await

const fetchJokeDois = async () => {
  try {
    const result = await fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data.value));
  } catch (error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
  //Determinamos que a função seja uma função assíncrona com async
  //e usamos await que determina que a função espere uma resposta antes de terminar sua execução
  return result;
};
fetchJokeDois(url);

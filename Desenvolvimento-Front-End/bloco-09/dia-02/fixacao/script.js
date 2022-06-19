const jsonInfo = `{
  "muitasEmpresasUsam": [
    "Google",
    "Twitter",
    "Facebook",
    "etc..."
  ],
  "temVariasVantagens": [
    "Legível",
    "Fácil de usar",
    "Leve",
    "Popular",
    "Versátil"
  ],
  "muitasLinguagensDaoSuporte": [
    "Python",
    "C",
    "C++",
    "Java",
    "PHP"
  ]
}`;

const usoJSONPorque = JSON.parse(jsonInfo);
//Variável que recebe uma conversão

const corporationList = document.getElementById('corporations-used-by');
const advantagesList = document.getElementById('advantages');
const languagesList = document.getElementById('languages-used-by');
//variávels que acessam elementos pelo seu ID para poder criar as listas

usoJSONPorque.muitasEmpresasUsam.map((empresas) => {
  const newLi = document.createElement('li');
  newLi.innerHTML = empresas;
  corporationList.appendChild(newLi);
});
//Cria uma array a partir dos elementos do 'objeto' jsonInfo criando uma lista com cada
//valor
usoJSONPorque.temVariasVantagens.map((vantagens) => {
  const newLi = document.createElement('li');
  newLi.innerHTML = vantagens;
  advantagesList.appendChild(newLi);
});

usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
  const newLi = document.createElement('li');
  newLi.innerHTML = linguagens;
  languagesList.appendChild(newLi);
});

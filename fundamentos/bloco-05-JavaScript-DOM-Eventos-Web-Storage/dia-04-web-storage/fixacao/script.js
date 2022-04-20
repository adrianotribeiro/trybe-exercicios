const button = document.getElementById("add-button");
//armazena em button o "acesso" ao elemento que possuir a id determinada
const input = document.getElementById("phrases-input");
//armazena em input o "acesso" ao elemento que possuir o id determinado
const list = document.getElementById("phrases-list");
//armazena em list o "acesso" ao elemento que possuir a id determinada

//
function insertPhraseInDOM() {
  const phrasesList = JSON.parse(localStorage.getItem("phrases"));
  //variável que recebe uma array que antes era exibida em string
  //const listLength = phrasesList.length - 1;
  //recebe o último filho do elemento que possui o Id "phrases-list"
  const phraseText = phrasesList[phrasesList.length - 1];
  //recebe o valor do último indice da array
  const phrases = document.createElement("li");
  //variável recebe a criação de um elemento;
  phrases.innerText = phraseText;
  //Aqui ele passa para cada elemento criado o último valor da array phrasesList
  list.appendChild(phrases);
  //Aqui termina a função "pendurando"/adicionando o elemento filho ao elemento
  //que possuir phrases-list como id
}

//passa as frases criadas, ou valores criados para a webstorage
function addPhraseToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem("phrases"));
  //recebe a string de array em formato numerico
  const phraseText = input.value;
  //recebe o valor da entrada de dados determinada pelo usuário
  oldList.push(phraseText);
  //adiciona na array esse valor passado pelo input
  localStorage.setItem("phrases", JSON.stringify(oldList));
  //Aqui ele passa para o Web Storage o valor da nova array em formato string
  //armazenada na chave phrases
  insertPhraseInDOM();
  //chamamos a função que cria os elementos li e passa valor ao conteúdo adicionado aqui
}

//função de verificação para garantir que a chave phrases seja uma array e receba um valor
function initialRenderization() {
  if (localStorage.getItem("phrases") === null) {
    //Se a chave não possuir valor algum execute:
    localStorage.setItem("phrases", JSON.stringify([])); //é atribuida a ela uma array vazia para poder ser usada pela primeira vez
  } else {
    const phrasesList = JSON.parse(localStorage.getItem("phrases"));
    //armazena o valor dela na variável
    const listLength = phrasesList.length - 1;
    //armazena o o último indice da array phrases
    for (let index = 0; index <= listLength; index += 1) {
      //equanto o index for menor ou igual que o valor do último
      //indice da array
      const listElement = document.createElement("li");
      //cria-se um li e armazena em listElement
      listElement.innerText = phrasesList[index];
      //E atribui o conteúdo das indices em cada li
      list.appendChild(listElement);
    }
  }
}

//quando o botão for clicado um evento é disparado e a função é chamada e executada
button.addEventListener("click", addPhraseToLocalStorage);

//Quando a página inteira for carregada a função será executada
window.onload = function () {
  initialRenderization();
};

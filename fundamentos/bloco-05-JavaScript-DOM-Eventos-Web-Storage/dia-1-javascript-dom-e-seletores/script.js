//1. Crie uma função que mude o texto na tag <p> para uma
//descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando
//no texto e sim realizando o exercício)

function textChange(phrase) {
  document.getElementsByTagName("p")[0].innerText = phrase;
}

let userPhrase =
  "Me vejo empregado como senior na empresa em que eu me sentir a vontade e continuando a estudar";
textChange(userPhrase);

//2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeColor(color) {
  document.getElementsByClassName("main-content")[0].style.backgroundColor =
    color;
}

let color = "rgb(76, 164, 109)";
changeColor(color);

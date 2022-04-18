// 1 - Acesse o elemento elementoOndeVoceEsta .
console.log(document.getElementsByTagName("section")[0].children[1]);
// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementsByTagName(
  "section"
)[0].parentElement.style.backgroundColor = "red";
// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementsByTagName("section")[1].textContent = "lorem ipsum forevis";
// 4 - Acesse o primeiroFilho a partir de pai .
document.getElementsByTagName("section")[0].children[0];
// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
document.getElementsByTagName("section")[2].previousElementSibling;
// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
document.getElementById("elementoOndeVoceEsta").nextSibling;
document.getElementsByTagName("section")[2].nextSibling;
// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
document.getElementsByTagName("section")[2].nextElementSibling;
// 8 - Agora acesse o terceiroFilho a partir de pai .
document.getElementsByTagName("section")[0].children[2];

// part-II
// 1 - Crie um irmão para elementoOndeVoceEsta .
// let aux = document.getElementById("pai");
// let newSection = document.createElement("section");
// newSection.className = "newSection";
// aux.appendChild(newSection);
// 2 - Crie um filho para elementoOndeVoceEsta .
// let aux2 = document.getElementById("elementoOndeVoceEsta");
// aux2.ClassName = "newSection";
// aux2.appendChild(newSection);
// 3 - Crie um filho para primeiroFilhoDoFilho .
// let aux3 = document.getElementById("primeiroFilho");
// let section = document.createElement("section");
// section.className = "filhoDoPrimeiroFilho";
// aux3.appendChild(section);
// 4 - A partir desse filho criado, acesse terceiroFilho .
document.getElementsByTagName("section")[1].children[0].parentElement
  .parentElement.children[2];

let irmaoDoOndeVoceEsta = document.createElement("section");
irmaoDoOndeVoceEsta.className = "irmaoDoOndeVoceEsta";
document.getElementById("pai").appendChild(irmaoDoOndeVoceEsta);

let filhoDoOndeVoceEsta = document.createElement("section");
filhoDoOndeVoceEsta.className = "filhoDoOndeVoceEsta";
document
  .getElementById("elementoOndeVoceEsta")
  .appendChild(filhoDoOndeVoceEsta);

let filhoDoPrimeiro = document.createElement("section");
filhoDoPrimeiro.className = "filhoDoPrimeiro";
document.getElementById("primeiroFilhoDoFilho").appendChild(filhoDoPrimeiro);

let pai = document.getElementById("pai");

for (let index; index < pai.childNodes.length; index += 1) {
  let auxElement = pai.childNodes[index];
  if (auxElement.id != "elementoOndeVoceEsta") {
    auxElement.remove();
  }
}

let segundoEultimoFilhoDoFilho = document.getElementById(
  "segundoEUltimoFilhoDoFilho"
);
segundoEUltimoFilhoDoFilho.remove();

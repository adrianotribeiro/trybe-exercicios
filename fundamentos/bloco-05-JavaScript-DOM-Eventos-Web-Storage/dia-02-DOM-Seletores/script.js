let bodyTag = document.getElementsByTagName("body")[0];
let h1Tag = document.createElement("h1");
h1Tag.className = "title";
let mainTag = document.createElement("main");
let sectionTag = [];
for (let index = 0; index < 3; index += 1) {
  sectionTag.push(document.createElement("section"));
  mainTag.appendChild(sectionTag[index]);
}
let pTag = document.createElement("p");
let imgTag = document.createElement("img");
let ulTag = document.createElement("ul");
let liTag = [];
let h3Tag = [];
bodyTag.appendChild(h1Tag);
bodyTag.appendChild(mainTag);
mainTag.className = "main-content";
sectionTag[0].className = "center-content";
sectionTag[1].className = "left-content";
sectionTag[2].className = "right-content";
imgTag.className = "small-image";
imgTag.src = "https://picsum.photos/200";
imgTag.alt = "Multiplas imagens que mudam com o tempo";
sectionTag[0].appendChild(pTag);
document.getElementsByClassName("left-content")[0].appendChild(imgTag);
document.getElementsByClassName("right-content")[0].appendChild(ulTag);
for (let index = 0; index < 10; index += 1) {
  liTag.push(document.createElement("li"));
  ulTag.appendChild(liTag[index]);
}
liTag[0].innerText = "um";
liTag[1].innerText = "dois";
liTag[2].innerText = "três";
liTag[3].innerText = "quatro";
liTag[4].innerText = "cinco";
liTag[5].innerText = "seis";
liTag[6].innerText = "sete";
liTag[7].innerText = "oito";
liTag[8].innerText = "nove";
liTag[9].innerText = "dez";
for (let index = 0; index < 3; index += 1) {
  h3Tag.push(document.createElement("h3"));
  mainTag.appendChild(h3Tag[index]);
  h3Tag[index].className = "description";
}
let removeLeftContent = document.getElementsByClassName("left-content")[0];
mainTag.removeChild(removeLeftContent);
let centralizeRightContent =
  document.getElementsByClassName("right-content")[0];
centralizeRightContent.style.marginRight = "auto";
let changeColor = document.getElementsByClassName("main-content")[0];
changeColor.style.backgroundColor = "green";
document.getElementsByTagName("ul")[0].lastChild.remove();
document.getElementsByTagName("ul")[0].lastChild.remove();

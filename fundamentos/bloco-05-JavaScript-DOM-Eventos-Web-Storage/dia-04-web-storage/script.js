let languageList = [
  "Հայերեն",
  "Shqip",
  "‫العربية",
  "Български",
  "Català",
  "中文简体",
  "Hrvatski",
  "Česky",
  "Dansk",
  "Nederlands",
  "English",
  "Eesti",
  "Filipino",
  "Suomi",
  "Français",
  "ქართული",
  "Deutsch",
  "Ελληνικά",
  "‫עברית",
  "हिन्दी",
  "Magyar",
  "Indonesia",
  "Italiano",
  "Latviski",
  "Lietuviškai",
  "македонски",
  "Melayu",
  "Norsk",
  "Polski",
  "Português",
  "Româna",
  "Pyccкий",
  "Српски",
  "Slovenčina",
  "Slovenščina",
  "Español",
  "Svenska",
  "ไทย",
  "Türkçe",
  "Українська",
  "Tiếng",
  "Việt",
];
let colors = ["blue", "red", "green", "black"];
createList();
createDivColors();
classDivColors();
function createList() {
  let listLanguage = document.getElementById("language-list");

  for (let i = 0; i < languageList.length; i++) {
    let list = document.createElement("a");
    list.className = "language";
    list.innerText = languageList[i];
    list.href = "#";
    listLanguage.appendChild(list);
  }
}

function createDivColors() {
  let buttonColors = document.getElementById("changeColors");
  for (let i = 0; i < colors.length; i++) {
    let button = document.createElement("button");
    button.className = "btn-colors " + colors[i];
    buttonColors.appendChild(button);
  }
}

function classDivColors() {
  let elementButton = [];
  for (let i = 0; i < colors.length; i++) {
    elementButton.push(document.getElementsByClassName("btn-colors")[i]);
    if (elementButton[i].className === "blue") {
      elementButton[i].style.backgroundColor = "blue";
    } else {
      elementButton[i].style.backgroundColor = "black";
    }
  }
}

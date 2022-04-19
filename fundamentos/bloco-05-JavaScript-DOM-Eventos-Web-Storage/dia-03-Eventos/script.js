function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
let holidays = [24, 25, 31];
let fridays = [4, 11, 18, 25];
function numberOfDays(numDays) {
  let day = document.getElementById("days");

  for (let index = 0; index < numDays.length; index += 1) {
    let liTag = document.createElement("li");
    day.appendChild(liTag);
    liTag.innerHTML = numDays[index];
    liTag.className = "day";
    if (holidays.includes(numDays[index])) {
      liTag.className += " holiday";
    }
    if (fridays.includes(numDays[index])) {
      liTag.className += " friday";
    }
  }
  return numDays;
}
numberOfDays(dezDaysList);
function buttonCreation(feriado) {
  let button = document.getElementsByClassName("buttons-container")[0];
  let btn = document.createElement("button");
  btn.id = "btn-holiday";
  btn.innerText = feriado;
  button.appendChild(btn);
}
buttonCreation("Feriado");
let btnHolidayClick = document.getElementById("btn-holiday");
btnHolidayClick.addEventListener("click", toggleHoliday);

function toggleHoliday() {
  let aux = document.getElementsByClassName("holiday");
  for (let index = 0; index < aux.length; index += 1) {
    if (aux[index].style.backgroundColor === "rgb(193, 191, 191)") {
      aux[index].style.backgroundColor = "rgb(238, 238, 238)";
    } else {
      aux[index].style.backgroundColor = "rgb(193, 191, 191)";
    }
  }
}
function buttonFridayCreation(sexta) {
  let sextaFeira = document.getElementsByClassName("buttons-container")[0];
  let button = document.createElement("button");
  button.id = "btn-friday";
  button.innerText = sexta;
  sextaFeira.appendChild(button);
}
buttonFridayCreation("Sexta");
let btnFridayClick = document.getElementById("btn-friday");
btnFridayClick.addEventListener("click", toggleFriday);
function toggleFriday() {
  let aux = document.getElementsByClassName("friday");
  for (let index = 0; index < aux.length; index++) {
    if (aux[index].innerText === "Sexta-Feira!") {
      aux[index].innerText = fridays[index];
    } else {
      aux[index].innerText = "Sexta-Feira!";
    }
  }
}

function mouseZoomIn() {
  let days = document.querySelector("#days");

  days.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "2em";
    event.target.style.fontWeight = "600";
  });
  {
  }
}

function mouseZoomOut() {
  let days = document.querySelector("#days");

  days.addEventListener("mouseout", function (event) {
    event.target.style.fontWeight = "200";
    event.target.style.fontSize = "20px";
  });
}
mouseZoomIn();
mouseZoomOut();

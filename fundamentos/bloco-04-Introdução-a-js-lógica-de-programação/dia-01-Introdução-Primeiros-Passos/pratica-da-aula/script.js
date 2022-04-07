// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: "Ana",
//   lasName: "Santos",
// };

// const patientEmail = "ana@email.com";

// console.log(typeof patientId);

//Sobre declarar variáveis e exibir tipos de variáveis
// const base = 5;
// const heigth = 8;
// const area = base * heigth;
// console.log("Resultado da multiplicação sera: " + area);
// const perimeter = base + heigth + heigth;
// console.log("Resultado da soma séra: " + perimeter);

//Condicionais
// const nota = 59;

// if (nota >= 80) {
//   console.log("Parabéns, você foi aprovada(o)!");
// } else if (nota <= 80 && nota >= 60) {
//   console.log("Você está na nossa lista de espera");
// } else {
//   console.log("Você foi reprovada(o)");
// }

//Sobre Operadores Lógico
//Operador and &&
// const currentHour = 7;
// let message;

// if (currentHour >= 22) {
//   message = "Não deveríamos comer nada, é hora de dormir";
// } else if (currentHour >= 18 && currentHour <= 22) {
//   message = "Rango da noite, vamos jantar :D";
// } else if (currentHour >= 14 && currentHour <= 18) {
//   message = "Vamos fazer um bolo pro café da tarde?";
// } else if (currentHour >= 11 && currentHour <= 14) {
//   message = "Hora do almoço!!!";
// } else if (currentHour >= 4 && currentHour <= 11) {
//   message = "Hmmm, cheiro de café recém passado";
// }

// console.log(message);

//Operador Or ||
// let weekDay = "Sabado";

// if (
//   weekDay == "segunda-feira" ||
//   weekDay == "terça-feira" ||
//   weekDay == "quarta-feira" ||
//   weekDay == "quinta-feira"
// ) {
//   console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// } else {
//   console.log("FINALMENTE, descanso merecido UwU");
// }

//Operador de negação Not!
// let inverso = true;
// console.log(!inverso);

//Switch e case
const nota = 59;
let estadoCandidato;
if (nota >= 80) {
  estadoCandidato = "aprovada";
} else if (nota <= 80 && nota >= 60) {
  estadoCandidato = "lista";
} else {
  estadoCandidato = "reprovada";
}

switch (estadoCandidato) {
  case "aprovada":
    console.log("Parabéns, aprovada!!");
    break;
  case "lista":
    console.log("Opa, lista de espera");
    break;
  case "reprovada":
    console.log("Reprovada");
    break;
  default:
    console.log("Não se aplica");
}

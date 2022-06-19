//1
const newEmployees = (employee) => {
  const employees = {
    id1: employee('Pedro Guerra'),
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employee('Luiza Drumond'),
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employee('Carla Paiva'),
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const registrationCompleted = (fullName) => {
  // return {
  //   nomeCompleto: infos,
  //   email:`${infos.toLowerCase().replace(/ /g, '_')}@trybe.com`,
  // }
  const email = fullName.toLowerCase().replace(/ /g, '_');
  return { fullName, email: `${email}@trybe.com`};
};
const employeeEmail = newEmployees(registrationCompleted).id1.email;
console.log(newEmployees(registrationCompleted));
console.log(employeeEmail);

//2

const sorteio = (matchNumber, number) => {
    return matchNumber(Math.floor(Math.random() * (5 - 1) + 1), number);
};

const choiceNumber = (randomValue, choice) => {
  return randomValue === choice ? 'Parabéns você ganhou' : 'Tente novamente'
};

console.log(sorteio(choiceNumber, 3));


const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const test = (correctAnswer, verificationAnswer, scoreAnswer) => {
  //correta : 1 ponto;
  //incorreta: 0.5;
  //Não houve resposta ('N.A') não altera a contagem;
 console.log(scoreAnswer(correctAnswer, verificationAnswer));
}

const examCorrection = (correctAnswers, answers) => {
  let answerPoints = 0;
  for (let i = 0; i < answers.length; i++) {
    if(answers[i] === correctAnswers[i]){
      answerPoints += 1;
    }else if(answers[i] === 'N.A'){
      answerPoints += 0;
    }else {
      answerPoints += 0.5;
    }
  }
  return answerPoints;
}

test(RIGHT_ANSWERS, STUDENT_ANSWERS, examCorrection);





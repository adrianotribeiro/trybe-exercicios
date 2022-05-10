const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const key = 'turno';
const value = 'noite';

const addNigthTurn = (object, turno, value) => {
  object.turno = value;
}

const showObjectLength = (object) =>{
   return Object.keys(object).length;
}

const showObjectValues = (object) => {
  return Object.values(object);
}
addNigthTurn(lesson2, key, value);
console.table(lesson2);

console.log(showObjectLength(lesson2));

console.log(showObjectValues(lesson2));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const totalEstudantes = (object) =>{
  const quantidadeDeEstudantesLesson1 = object.lesson1.numeroEstudantes;
  const quantidadeDeEstudantesLesson2 = object.lesson2.numeroEstudantes;
  const quantidadeDeEstudantesLesson3 = object.lesson3.numeroEstudantes;
  return quantidadeDeEstudantesLesson1 + quantidadeDeEstudantesLesson2 + quantidadeDeEstudantesLesson3;
}

console.log(totalEstudantes(allLessons));

const getValueByNumber = (object, position) => {
  const objectArrayValues = Object.values(object);
  return objectArrayValues[position];
}
console.log(getValueByNumber(lesson1, 0));

const verifyPair = (object, objectKey, keyValue) => {
  return object[objectKey] === keyValue;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
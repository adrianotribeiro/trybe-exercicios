// // const sum = (value1, value2) => value1 + value2;

// // console.log(sum(2, 3));
// // const sum = (value1, value2) => {
// //   if(typeof value1 !== 'number' || typeof value2 !== 'number') {
// //     return 'Os valores devem ser númericos';
// //   }

// //   return value1 + value2;
// // };

// // console.log(sum(2, '3'));

// // const sum = (value1, value2) => {
// //   if(typeof value1 !== 'number' || typeof value2 !== 'number') {
// //     throw new Error('Os valores devem ser numéricos');
// //   }

// //   return value1 + value2;
// // };

// // console.log(sum(2, '3'));

// const verifyNumber = (value1, value2) => {
//   if(typeof value1 !== 'number' || typeof value2 !== 'number'){
//     throw new Error('Os valores devem ser numéricos');
//   }
// }
// //função que verifica se os tipos dos valores são iguais

// const sum = (value1, value2) =>{
//   try {//tente executar o código
//     verifyNumber(value1, value2);
//     //Recebe os valores e passa como parâmetro chamando a função de verificação
//     return value1 + value2;
//     //Caso esteja tudo certo retorne a soma dos valores
//   }catch(error){
//     throw error.message;
//     //Do contrário chama-se o catch retornando error
//   }
// }

// console.log(sum(2, 3));

// // Objetos partI

// const costumer1 = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'teacher',
// };

// console.log(costumer1);

// costumer1.lastName = 'Faria';
// console.log(costumer1);

// const costumer2 = {
//   firstName: 'Maria',
//   age: 23,
//   job: 'Medic',
// };

// console.log(costumer2);
// costumer2['lastName'] = 'Siva';
// console.log(costumer2);

// const costumer3 = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// costumer3[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${costumer3.firstName} ${costumer3.lastName}`;
// costumer3[newKey] = fullName;

// console.log(costumer3);

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// // for(const property in coolestTvShow){
// //   console.log(property);
// // }
// //Enquanto aqui nós percorremos o objeto e retornamos as chaves
// console.log(Object.keys(coolestTvShow));
// //Retorna um array com cada chave

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// console.log(Object.values(student1));
// console.log(Object.values(student2));

// const listSkills = (student) => {
//   const arrayOfSkills = Object.keys(student);
//   for(const index in arrayOfSkills) {
//     console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//   }
// }

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);

// const coolestTvShow2 = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// for (const property in coolestTvShow2) {
//   console.log(coolestTvShow2[property]);
// }

// console.log(Object.values(coolestTvShow2));

// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsValuesWithValues = (student) => Object.values(student);

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

console.log(Object.entries(coolestTvShow));

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};
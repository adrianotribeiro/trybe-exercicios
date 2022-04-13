let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: { golden: 2, silver: 3 },
  bestInThwWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};
let bestWorldCount;
for (let index = 0; index <= player.bestInThwWorld.length; index += 1) {
  bestWorldCount = index;
}
console.log(
  "Nome do perfil selecionado é: " +
    player.name +
    " " +
    player.lastName +
    ", " +
    player.age +
    " anos. Melhor do por " +
    bestWorldCount +
    " vezes."
  // " anos. Melhor do mundo nos anos de " +
  // player.bestInThwWorld.join(", ")
);
console.log(
  "A jogadora possui: " +
    player.medals.golden +
    " medalhas de ouro e " +
    player.medals.silver +
    " de prata."
);
console.log("");
//parte dois - for in

let cars = ["Saab", "Volvo", "BMW"];

for (let key in cars) {
  console.log(cars[key]);
}
console.log("");
let car = {
  type: "fiat",
  model: "500",
  color: "white",
};
for (let index in car) {
  console.log(index, car[index]);
}
console.log("");

let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};

for (let name in names) {
  console.log("Olá, " + names[name]);
}

console.log("");
let carros = {
  model: "A3 Sedan",
  manuFacturer: "Audi",
  year: 2020,
};

for (let key in carros) {
  console.log(carros[key]);
}

//Funções

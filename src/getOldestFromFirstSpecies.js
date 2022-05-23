const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idAnimal = data.employees.find((pessoa) => pessoa.id === id).responsibleFor[0];
  const animalName = data.species.find((animal) => animal.id === idAnimal).residents;
  const ages = animalName.map((animal) => animal.age);
  return Object.values(animalName.find((animal) => animal.age === Math.max(...ages)));
}

module.exports = getOldestFromFirstSpecies;

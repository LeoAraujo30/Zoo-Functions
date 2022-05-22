const data = require('../data/zoo_data');

function countAnimals(obj) {
  if (!obj) {
    return {
      [data.species[0].name]: data.species[0].residents.length,
      [data.species[1].name]: data.species[1].residents.length,
      [data.species[2].name]: data.species[2].residents.length,
      [data.species[3].name]: data.species[3].residents.length,
      [data.species[4].name]: data.species[4].residents.length,
      [data.species[5].name]: data.species[5].residents.length,
      [data.species[6].name]: data.species[6].residents.length,
      [data.species[7].name]: data.species[7].residents.length,
      [data.species[8].name]: data.species[8].residents.length,
    };
  }
  const { sex } = obj;
  const filtro = data.species.find((animal) => animal.name === obj.specie).residents;
  if (!sex) return filtro.length;
  return filtro.filter((animal) => animal.sex === obj.sex).length;
}

module.exports = countAnimals;

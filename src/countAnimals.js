const data = require('../data/zoo_data');

function countAnimals(obj) {
  if (!obj) {
    return data.species.reduce((ac, a) => Object.assign(ac, { [a.name]: a.residents.length }), {});
  }
  const { sex } = obj;
  const filtro = data.species.find((animal) => animal.name === obj.specie).residents;
  if (!sex) return filtro.length;
  return filtro.filter((animal) => animal.sex === obj.sex).length;
}

module.exports = countAnimals;

const data = require('../data/zoo_data');

function getAnimalsOlderThan(name, age) {
  let criatura = data.species.find((animal) => animal.name == name).residents
  return criatura.every((animal) => animal.age >= age)
}

module.exports = getAnimalsOlderThan;

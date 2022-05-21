const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  if (ids.length >= 1) return data.species.filter((animal) => ids.find((id) => id === animal.id));
}

module.exports = getSpeciesByIds;

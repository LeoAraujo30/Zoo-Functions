const data = require('../data/zoo_data');

const creatArrayAnimal = (pessoa) => {
  const filtro = data.species.filter((a) => pessoa.responsibleFor.find((id) => id === a.id));
  return filtro.map((animal) => animal.name);
};

function creatArrayLocal(pessoa) {
  const filtro = data.species.filter((a) => pessoa.responsibleFor.find((id) => id === a.id));
  return filtro.map((animal) => animal.location);
}

function creatObj(pessoa) {
  if (!pessoa) throw new Error('Informações inválidas');
  return {
    id: pessoa.id,
    fullName: `${pessoa.firstName} ${pessoa.lastName}`,
    species: creatArrayAnimal(pessoa),
    locations: creatArrayLocal(pessoa),
  };
}

function getEmployeesCoverage(obj) {
  if (!obj) return data.employees.map((pessoa) => creatObj(pessoa));
  const { name, id } = obj;
  const pessoaPorName = data.employees.find((p) => p.firstName === name || p.lastName === name);
  const pessoaPorId = data.employees.find((p) => p.id === id);
  if (name && !id) return creatObj(pessoaPorName);
  return creatObj(pessoaPorId);
}

module.exports = getEmployeesCoverage;

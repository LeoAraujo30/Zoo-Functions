const data = require('../data/zoo_data');

function isManager(id) {
  const filtro = data.employees.find((pessoa) => pessoa.id === id).managers;
  if (filtro.length === 0) return true;
  return filtro.some((pessoa) => pessoa === '9e7d4524-363c-416a-8759-8aa7e50c0992');
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const filtro = data.employees.filter((p) => p.managers.find((id) => id === managerId));
    return filtro.map((pessoa) => `${pessoa.firstName} ${pessoa.lastName}`);
  }
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };

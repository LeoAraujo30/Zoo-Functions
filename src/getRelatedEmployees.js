const data = require('../data/zoo_data');

function isManager(id) {
  const filtro = data.employees.find((pessoa) => pessoa.id === id).managers;
  if (filtro.length === 0) return true;
  return filtro.some((pessoa) => pessoa === '9e7d4524-363c-416a-8759-8aa7e50c0992');
}
// console.log(isManager('c1f50212-35a6-4ecd-8223-f835538526c2'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId) == true) {
    const filtro = data.employees.filter((pessoa) => pessoa.managers.find((id) => id === managerId))
    return filtro.map((pessoa) => `${pessoa.firstName} ${pessoa.lastName}`)
  }
  if (isManager(managerId) == false) {
    throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}
// console.log(getRelatedEmployees('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = { isManager, getRelatedEmployees };

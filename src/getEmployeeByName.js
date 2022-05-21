const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((p) => p.firstName === employeeName || p.lastName === employeeName);
}

module.exports = getEmployeeByName;

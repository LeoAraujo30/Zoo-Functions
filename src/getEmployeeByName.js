const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {}
  return data.employees.find((pesssoa) => pesssoa.firstName == employeeName || pesssoa.lastName == employeeName)
}

module.exports = getEmployeeByName;

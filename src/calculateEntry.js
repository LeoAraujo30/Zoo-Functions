const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const criança = entrants.filter((pessoa) => pessoa.age < 18).length;
  const adulto = entrants.filter((pessoa) => pessoa.age >= 18 && pessoa.age < 50).length;
  const velho = entrants.filter((pessoa) => pessoa.age >= 50).length;
  return { child: criança, adult: adulto, senior: velho };
}

function calculateEntry(entrants) {
  if (Array.isArray(entrants) === false) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  return (child * data.prices.child) + (adult * data.prices.adult) + (senior * data.prices.senior);
}

module.exports = { calculateEntry, countEntrants };

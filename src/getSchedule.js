const data = require('../data/zoo_data');

const isAnimal = (string) => {
  const animais = ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs',
    'elephants', 'snakes', 'giraffes'];
  return animais.some((animal) => animal === string);
};

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const isDay = (string) => days.some((day) => day === string);

const creatArray = (string) => {
  const filtro = data.species.filter((animal) => animal.availability.find((day) => day === string));
  return filtro.map((animal) => animal.name);
};

const creatObj = (string) => {
  if (string === 'Monday') {
    return {
      [string]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  return {
    [string]: {
      officeHour: `Open from ${data.hours[string].open}am until ${data.hours[string].close}pm`,
      exhibition: creatArray(string),
    },
  };
};

function getSchedule(string) {
  if (isDay(string) === true) return creatObj(string);
  if (isAnimal(string) === true) {
    return data.species.find((animal) => animal.name === string).availability;
  }
  return days.reduce((acc, day) => Object.assign(acc, creatObj(day)), {});
}

module.exports = getSchedule;

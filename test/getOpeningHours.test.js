const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se a função retorna o valor correto ao não receber um parametro', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('Verifica se a função retorna o valor correto ao receber parametros validos', () => {
    const expected1 = 'The zoo is closed';
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(expected1);
    const expected2 = 'The zoo is open';
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual(expected2);
    const expected3 = 'The zoo is closed';
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual(expected3);
  });
  it('Verifica se a função retorna os seguintes erros', () => {
    const expected1 = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('asdad', '09:00-AM')).toThrowError(expected1);
    const expected2 = 'The hour should represent a number';
    expect(() => getOpeningHours('Tuesday', 'HH:00-AM')).toThrowError(expected2);
    const expected3 = 'The minutes should represent a number';
    expect(() => getOpeningHours('Wednesday', '09:MM-PM')).toThrowError(expected3);
    const expected4 = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Wednesday', '09:00-XX')).toThrowError(expected4);
    const expected5 = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours('Sunday', '13:00-PM')).toThrowError(expected5);
    const expected6 = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('Sunday', '09:80-AM')).toThrowError(expected6);
  });
});

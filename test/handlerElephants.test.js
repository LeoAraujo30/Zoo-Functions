const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se a função retorna o valor correto ao receber o parametro count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se a função retorna o valor correto ao receber o parametro names', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(expected);
  });
  it('Verifica se a função retorna o valor correto ao receber o parametro averageAge', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Verifica se a função retorna o valor correto ao receber o parametro location', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica se a função retorna o valor correto ao receber o parametro popularity', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Verifica se a função retorna o valor correto ao receber o parametro availability', () => {
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(handlerElephants('availability')).toEqual(expected);
  });
  it('Verifica se a função retorna o valor correto ao receber um parametro invalido', () => {
    expect(handlerElephants('asdasdad')).toBe(null);
  });
  it('Se não receber uma string, verifica se a função retorna uma mensagem', () => {
    expect(handlerElephants(1000)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se a função retorna undefined ao não receber um parametro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
});

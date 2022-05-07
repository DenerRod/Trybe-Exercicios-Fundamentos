const {sum, sub, mut, media} = require('./script'); // recebe uma function de outro arquivo;

describe('Soma valores', () => {
test('sums two values', () => { // Chama o teste;
  expect(sum(2, 3)).toEqual(5); // Resultado esperado;
});
});

describe('Subtrai valores', () => { //Adiciona título ao teste (terminal);
test('subtrai valores', () => {
  expect(sub(4, 3)).toEqual(1);
});
});

describe('Multiplica valores', () => {
  test('multiplica dois valores', () => {
    expect(mut(5, 5)).toEqual(25);
  })
});

describe('Media valores', () => {
  test('media dois valores', () => {
    expect(media([5, 5])).toEqual(5);
  })
});
const books = require('../Exericio8.2/dados');

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
};

console.log(someBookWasReleaseOnThe80s());
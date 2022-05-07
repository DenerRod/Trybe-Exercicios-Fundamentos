const books = require('../Exericio8.2/dados');

const expectedResult = false;

function authorUnique() {
  return books.every((book) => book.author.birthYear !== book.author.birthYear);
};

console.log(authorUnique());
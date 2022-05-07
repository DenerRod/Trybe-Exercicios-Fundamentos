const books = require('../Exericio8.2/dados');

function smallerName() {
    let nameBook;

    books.forEach((book) => {
        if ( !nameBook || book.name.length < nameBook.length ) {
            nameBook = book.name;
        }
    });
  
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
}

console.log(smallerName());
//função usando for
/* const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames = [];
  
  for (let index = 0; index < persons.length; index += 1) {
    fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
  }
  
  console.log(fullNames); */

  //função usando usando map
/*   const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
  
  console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ] */


  //exemplo 1

 /*  let listaNumeros = [10, 20, 30, 40];

  let multNumeros = listaNumeros.map((numero) => {return `A multiplicação por 2 de ${listaNumeros} são: ${numero *2}`});
  console.log(multNumeros); */


  //exemplo 2

/*   const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]
 */


//exercicio 01

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

let atualizaProdutos = (listaProducts, listaPrices) => listaProducts.map((product, index) =>(
    { [product]: listaPrices[index] }
));

let listaItens = atualizaProdutos(products, prices);

console.log(listaItens);
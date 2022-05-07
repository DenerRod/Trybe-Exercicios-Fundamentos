const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

 fetch(url)
 .then((response) => response.json())
 .then((data) => setTimeout(() =>console.log(data.value), 3000))
 .catch((error) => console.log(`DEU RUIM \n ${error}`)); //catch() "pega" qualquer erro que acontecer dentro de qualquer .then() anterior a ele. Por esse motivo ele é geralmente usado no final.

}

fetchJoke();
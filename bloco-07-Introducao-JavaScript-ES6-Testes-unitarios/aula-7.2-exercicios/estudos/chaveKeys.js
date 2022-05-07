/* const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  console.log(customer1);
  
  customer1.sex = 'Masc';
  console.log(customer1); */

  /* const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  }  
  console.log(customer1); */

 /*  let newKey = 'lastName';
  const lastName = 'Rodrigues';
  customer1[newKey] = lastName; //aplicou a newKey lastName (nova chave ao objeto customer1)
  newKey = 'fullName'; //criou a newKey fullName
  const fullName = `${customer1.firstName} ${customer1.lastName}`; //aplicou conteudo à newKey fullName
  customer1[newKey] = fullName; // jogou a newKey fullName ao objeto customer
  console.log(customer1); */

  //Praticar

  function jogaKey(objeto = {}, key, valor) {
    objeto[key] = valor;
    return objeto;
  }
  
  console.log(jogaKey({nome: 'Dener', idade: '20', cidade: 'Udia'}, 'lastName', 'Rodrigues'));
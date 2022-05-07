const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Dener', 'Marcos', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Marcos', arrayMyStudents);
console.log(newListStudents); 
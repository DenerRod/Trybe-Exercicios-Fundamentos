  const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    return names.reduce((acc, curr) => 
        acc + curr.split('').reduce((acumulador, current) => {
            if (current === 'a' || current === 'A') { 
                return acumulador +1;
            } else {
                return acumulador;
            } 
        }, 0), 0);

        
  };

  console.log(containsA());
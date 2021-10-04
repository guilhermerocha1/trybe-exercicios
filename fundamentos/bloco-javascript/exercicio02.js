const citiesAndStates = [
  {
  city: 'Belo Horizonte',
  state: 'Minas Gerais',
  },
  {
  city: 'Salvador',
  state: 'Bahia',
  },
  {
  city: 'Porto Alegre',
  state: 'Rio Grande do Sul',
  },
  {
  city: 'Manaus',
  state: 'Amazonas',
  }
  ]
  
  // Resultado esperado
  //['Belo Horizonte - Minas Gerais', 'Salvador - Bahia', 'Porto Alegre - Rio Grande do Sul', 'Manaus - Amazonas']
  
  function buildCitiesArray(array) {
  // Seu código aqui
    let arrayResult = [];
    for (let i in array) {
      arrayResult.push(`${array[i].city} - ${array[i].state}`);
    }
    return arrayResult;
  }

console.log(buildCitiesArray(citiesAndStates));
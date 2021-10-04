let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for (let cont in names){
      console.log("Olá, "+names[cont]);
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let cont in car){
      console.log(cont ,car[cont]);
  }
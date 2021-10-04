const arrayNunbers = [20, 30, 19, 20, 50];

function allGreaterThanEighteen(array) {
  let somaValores = 0;
  for (let i = 0; i < array.lenght; i += 1) {
    if (array[i] > 18) {
      somaValores += 1;
    }
  }
  if (array.lenght - 1 === somaValores){
    return true; //
  }
  return false;
}

console.log (allGreaterThanEighteen(arrayNunbers));